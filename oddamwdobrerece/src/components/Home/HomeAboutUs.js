import React, { Component } from 'react';

// import { ReactComponent as Decoration } from '../../assets/Decoration.svg';

import decoration from '../../assets/Decoration.svg';
import signature from "../../assets/Signature.svg";
import people from "../../assets/People.jpg";

class HomeAboutUs extends Component {
    render(){
        return (
            <div id="aboutUs" className="aboutUsContainer">
                <div className="aboutUsLeftContainerSmall">
                    <h2 className="aboutUsLeftContainerSmallHeader">O nas</h2>
                    <img src={decoration} alt="decoration"/>
                    <p className="aboutUsLeftContainerSmallParagraph">
                        Nori grape silver beet broccoli kombu beet <br/>
                        greens fava bean potato quandong celery. Bunya <br/>
                        nuts black-eyed pea pririe turnip leek lentil <br/>
                        turnip greens parsnip.</p>
                    <img src={signature} alt="signature" className="aboutUsLeftContainerSmallSignature"/>
                </div>
                <div className="aboutUsRightContainerSmall">
                    <img src={people} alt="People" className="aboutUsRightContainerSmallImage"/>
                </div>
            </div>
        )
    }
}

export default HomeAboutUs;
