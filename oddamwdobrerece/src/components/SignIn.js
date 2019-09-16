import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { ReactComponent as Decoration } from '../assets/Decoration.svg';

const SignIn = () => {
    return (
        <div className="logContainer">
        <h2 className="logHeader">Załóż konto</h2>
        <Decoration className="logDecoration"/>
        <form className="logFormContainer">
            <label htmlFor="email">Email</label>
            <input
                type="email"
                name="email"
                placeholder=""
                // value={this.state.name.value}
                // onChange={}
            />
            <label htmlFor="password">Hasło</label>
            <input
                type="password"
                name="password"
                placeholder=""
                // value={this.state.name.value}
                // onChange={}
            />
            <label htmlFor="confirm">Powtórz hasło</label>
            <input 
                type="password"
                name="confirm"
                placeholder=""
            />
        </form>
        <div className="logSmallContainer">
            <ul>
                <li>
                    <Link to="/logowanie/">Zaloguj się</Link>
                </li>
                <li>
                    <Link>Załóż konto</Link>
                </li>
            </ul>
        </div>
    </div>
    )
};

export default SignIn;