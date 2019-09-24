import React, { Component } from 'react';
import Menu from "./Menu.js";
import Login from "./Login";

class HomeHeader extends Component {
    render(){
        return (
            <header className="headerContainer">
                <Login/>
                <Menu/>
            </header>
        )
    }
}

export default HomeHeader;
