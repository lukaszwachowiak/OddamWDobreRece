import React from 'react';
import {Link} from 'react-router-dom';

const Login = () => {
    return (

            <ul className="upperNavigation">
                <li>
                    <Link to="/logowanie/">Zaloguj się</Link>
                    <Link to="/rejestracja/">Zarejestruj się</Link>
                </li>
            </ul>

    )
};

export default Login;