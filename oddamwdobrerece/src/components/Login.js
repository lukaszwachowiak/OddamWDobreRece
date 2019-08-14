import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import SignIn from "./SignIn";
import Log from "./Log";

const Login = () => {
    return (
        <Router>
            <ul className="upperNavigation">
                <li>
                    <Link to="/logowanie/">Zaloguj się</Link>
                    <Link to="/rejestracja/">Zarejestruj się</Link>
                </li>
            </ul>

            <Route path="/logowanie/" component={Log} />
            <Route path="/rejestracja/" component={SignIn} />
        </Router>

    )
};

export default Login;