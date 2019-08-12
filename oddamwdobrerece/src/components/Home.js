import React, { Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import HomeHeader from "./HomeHeader.js";
import HomeMainSection from "./HomeMainSection.js";
import HomeThreeColumns from "./HomeThreeColumns.js";
import Home4Steps from "./Home4Steps.js";
import HomeAboutUs from "./HomeAboutUs.js";
import HomeHelp from "./HomeHelp.js";
import HomeContact from "./HomeContact.js";
import HomeFooter from "./HomeFooter.js";

class Home extends Component {
    render(){
        return (
            <Fragment>
                <HomeHeader/>
                <HomeMainSection/>
                <HomeThreeColumns/>
                <Home4Steps/>
                <HomeAboutUs/>
                <HomeHelp/>
                <HomeContact/>
                <HomeFooter/>
            </Fragment>
        )
    }
}

export default Home;
