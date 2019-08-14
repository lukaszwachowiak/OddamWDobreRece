import React from 'react';
import {Link} from 'react-scroll';
import Start from "./Start";

const Menu = () => {
    return (
        <ul className="lowerNavigation">
            <Start/>
            <Link to="steps">O co chodzi?</Link>
            <Link to="aboutUs">O nas</Link>
            <Link to="help">Fundacja i organizacje</Link>
            <Link to="contact">Kontakt</Link>
        </ul>
    )
};

export default Menu;
