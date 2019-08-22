import React, { Component } from 'react';
import {ReactComponent as Decoration} from "../../assets/Decoration.svg";
import clothes from "../../assets/Background-Contact-Form.jpg";

class HomeContact extends Component {
    render(){
        return (
            <div id="contact" className="contactContainer">
                <div className="contactImage">
                    {/*<img src={clothes} alt="clothes"/>*/}
                </div>
                <div className="contactSectionRight">
                    <h2 className="contactSectionRightHeader">Skontaktuj się z nami</h2>
                    <Decoration/>
                    <form className="">
                        <div>
                            <div className="">
                                <label htmlFor="name">Wpisz swoje imię </label>
                                <input type="text" name="name" placeholder="Krzysztof" required/>
                            </div>
                            <div className="">
                                <label htmlFor="email">Wpisz swój e-mail </label>
                                <input type="email" name="email" placeholder="abc@xyz.pl" required/>
                            </div>
                        </div>
                        <div>
                            <textarea></textarea>
                        </div>
                        <div className="form-example">
                            <input type="submit" value="Wyślij"/>
                        </div>
                    </form>
                </div>

            </div>
        )
    }
}

export default HomeContact;
