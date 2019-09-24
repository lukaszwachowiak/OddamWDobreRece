import React, { Component } from 'react';
import {ReactComponent as Decoration} from "../../assets/Decoration.svg";
// import clothes from "../../assets/Background-Contact-Form.jpg";

class HomeContact extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: {
                name: 'name',
                label: 'Imie',
                error: false,
                rule: /\S{2,}/,
                value: ''
            },
            mail: {
                name: 'mail',
                label: 'Email',
                error: false,
                value: '',
                rule: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            },

            textError: false,
            textValue: '',
        }
    }

    // input name & input mail
    handleOnChange = (name) => (e) => {
        e.preventDefault();
        // console.log(e.target.value, name);
        this.setState({
            [name]: Object.assign({}, this.state[name], {value: e.target.value})
        })
    };
    // input name & input mail c.d. - validation
    handleOnBlur = (name) => (e) => {
        e.preventDefault();
        // console.log(e.target.value, name);
        const error = !this.state[name].rule.test(e.target.value);
        this.setState({
            [name]: Object.assign({}, this.state[name], {error})
        })
    };

    // textarea
    handleTextChange(e){
        e.preventDefault();

        this.setState({
            textValue: e.target.value,
        })
    }
    // textarea c.d. - validation
    handleTextBlur(e){
        e.preventDefault();

        if (this.state.textValue.length > 120) {
            this.setState({
                textError: false,
            })
        }  else {
            this.setState({
                textError: true,
            })
        }
    }

    // onSubmit
    message(e){
        e.preventDefault();

        fetch(
            "http://localhost:3002/posts",
            {
            method: "post",
            body: JSON.stringify({
                name: this.state.name.value,
                mail: this.state.mail.value,
                text: this.state.textValue,
            }),
            headers:{
                'Content-Type': 'application/json'
            }
        })
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                console.log("Request succeeded with response", data);
            })
            .catch(function(error) {
                console.log("Request failed", error);
            });

        // reset stanu lokalnego po wysłaniu wiadomości
        this.setState({
            name: {
                name: 'name',
                label: 'Imie',
                error: false,
                rule: /\S{2,}/,
                value: ''
            },
            mail: {
                name: 'mail',
                label: 'Email',
                error: false,
                value: '',
                rule: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            },
            textError: false,
            textValue: ''
        })
    }

    render(){
        // console.log(this.state);
        return (
            <div id="contact" className="contactContainer">
                <div className="contactImage">
                    {/*<img src={clothes} alt="clothes"/>*/}
                </div>
                <div className="contactSectionRight">
                    <h2 className="contactSectionRightHeader">Skontaktuj się z nami</h2>
                    <Decoration/>
                    <form
                        className="contactFormContainer"
                        onSubmit={e => this.message(e)}
                        // submit na form
                    >
                        <div className="contactFormNameEmail">
                            <div className="contactFormName">
                                <label htmlFor="name">Wpisz swoje imię </label>
                                <input
                                    type="text"
                                    name={this.state.name.name}
                                    placeholder="Krzysztof"
                                    value={this.state.name.value}
                                    onChange={this.handleOnChange(this.state.name.name)}
                                    onBlur={this.handleOnBlur(this.state.name.name)}
                                />
                                {this.state.name.error ?
                                    <div style={{"color": "red"}}>Nieprawidłowa nazwa</div>
                                    : false}
                            </div>
                            <div className="contactFormMail">
                                <label htmlFor="email">Wpisz swój e-mail </label>
                                <input
                                    type="email"
                                    name={this.state.mail.name}
                                    placeholder="abc@xyz.pl"
                                    value={this.state.mail.value}
                                    onChange={this.handleOnChange(this.state.mail.name)}
                                    onBlur={this.handleOnBlur(this.state.mail.name)}
                                />
                                {this.state.mail.error ?
                                    <div style={{"color": "red"}}>Nieprawidłowa nazwa maila</div>
                                    : false}
                            </div>
                        </div>
                        <div className="contactFormText">
                            <label htmlFor="textarea">Wpisz swoją wiadomość</label>
                            <textarea
                                value={this.state.textValue}
                                placeholder="wpisz swoją wiadomość"
                                onChange={e => this.handleTextChange(e)}
                                onBlur={e => this.handleTextBlur(e)}
                            >
                            </textarea>
                            {this.state.textError ?
                                <div style={{"color": "red"}}>
                                    Wiadomość musi składać się z co najmniej 120 znaków
                                </div>
                                : false}
                        </div>
                        <div className="contactFormSend">
                            <input
                                type="submit"
                                value="Wyślij"
                            />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default HomeContact;
