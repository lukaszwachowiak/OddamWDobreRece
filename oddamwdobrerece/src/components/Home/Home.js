import React, { Component, Fragment} from 'react';

// import HomeHeader from "../HomeHeader";
import HomeMainSection from "./HomeMainSection";
import HomeThreeColumns from "./HomeThreeColumns";
import Home4Steps from "./Home4Steps";
import HomeAboutUs from "./HomeAboutUs";
import HomeHelp from "./HomeHelp";
import HomeContact from "./HomeContact";
// import HomeFooter from "../HomeFooter";

class Home extends Component {
    render(){
        return (
            <Fragment>
                <HomeMainSection/>
                <HomeThreeColumns/>
                <Home4Steps/>
                <HomeAboutUs/>
                <HomeHelp/>
                <HomeContact/>
            </Fragment>
        )
    }
}

export default Home;
