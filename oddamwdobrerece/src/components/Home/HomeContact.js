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
                rule: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            }
        }
    }

    handleOnChange = (name) => (e) => {
        e.preventDefault();
        this.setState(prevState => ({
            [name]: {
                ...prevState[name],
                value: e.target.value
            }
        }))
    };

    render(){
        return (
            <div id="contact" className="contactContainer">
                <div className="contactImage">
                    {/*<img src={clothes} alt="clothes"/>*/}
                </div>
                <div className="contactSectionRight">
                    <h2 className="contactSectionRightHeader">Skontaktuj się z nami</h2>
                    <Decoration/>
                    <form className="contactFormContainer">
                        <div className="contactFormNameEmail">
                            <div className="contactFormName">
                                <label htmlFor="name">Wpisz swoje imię </label>
                                <input
                                    type="text"
                                    name={this.state.name.name}
                                    placeholder="Krzysztof"
                                    value={this.state.name.value}
                                    onChange={this.handleOnChange(this.state.name.name)}
                                    // onBlur={this.handleOnBlur(this.state.name.name)}
                                />
                            </div>
                            <div className="contactFormMail">
                                <label htmlFor="email">Wpisz swój e-mail </label>
                                <input type="email" name="email" placeholder="abc@xyz.pl" required/>
                            </div>
                        </div>
                        <div className="contactFormText">
                            <label htmlFor="textarea">Wpisz swoją wiadomość</label>
                            <textarea required></textarea>
                        </div>
                        <div className="contactFormSend">
                            <input type="submit" value="Wyślij"/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default HomeContact;
