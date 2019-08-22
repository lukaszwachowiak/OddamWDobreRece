import React, { Component } from 'react';
import facebookIcon from "../assets/Facebook.svg";
import instagramIcon from "../assets/Instagram.svg";

class HomeFooter extends Component {
    render(){
        return (
            <footer className="footerContainer">
                <div className="footerBlankSpace"></div>
                <h3 className="footerHeader">Copyright by Coders Lab</h3>
                <div className="footerSocialMedia">
                    <img src={facebookIcon} alt="facebook icon" className="footerIcon"/>
                    <img src={instagramIcon} alt="instagram icon" className="footerIcon"/>
                </div>
            </footer>
        )
    }
}

export default HomeFooter;
