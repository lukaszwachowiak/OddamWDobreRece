import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Decoration} from "../assets/Decoration.svg";

const Log = () => {
    return (
        <div className="logContainer">
            <h2 className="logHeader">Zaloguj się</h2>
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
            </form>
            <div className="logSmallContainer">
                <ul>
                    <li>
                        <Link to="/rejestracja/">Załóż konto</Link>
                    </li>
                </ul>

                <input type="submit" value="Zaloguj się"/>
            </div>
        </div>
    )
};

export default Log;