import React, { Component } from 'react';
import {Link} from "react-router-dom";

// import { ReactComponent as Decoration } from '../../assets/Decoration.svg';

import decoration from '../../assets/Decoration.svg';
import iconOne from "../../assets/Icon-1.svg";
import iconTwo from "../../assets/Icon-2.svg";
import iconThree from "../../assets/Icon-3.svg";
import iconFour from "../../assets/Icon-4.svg";

class Home4Steps extends Component {
    render(){
        return (
            <div id="steps" className="fourStepsContainerBig">
                <h2 className="fourStepsHeader">Wystarczą 4 proste kroki</h2>
                <img src={decoration} alt="Decoration" className="fourStepsDecoration" />
                <div className="fourStepsContainerSmall">
                    <div className="fourStepsSectionSmall">
                        <img src={iconOne} alt="Icon-1"/>
                        <p>Wybierz rzeczy</p>
                        <hr className="fourStepsLine"/>
                        <p>ubrania, zabawki, <br/> sprzęt i inne</p>
                    </div>
                    <div className="fourStepsSectionSmall">
                        <img src={iconTwo} alt="Icon-2"/>
                        <p>Spakuj je</p>
                        <hr className="fourStepsLine"/>
                        <p>skorzystaj z <br/> worków na śmieci</p>
                    </div>
                    <div className="fourStepsSectionSmall">
                        <img src={iconThree} alt="Icon-3"/>
                        <p>Zdecyduj komu <br/> chcesz pomóc</p>
                        <hr className="fourStepsLine"/>
                        <p>wybierz zaufane <br/> miejsce</p>
                    </div>
                    <div className="fourStepsSectionSmall">
                        <img src={iconFour} alt="Icon-4"/>
                        <p>Zamów kuriera</p>
                        <hr className="fourStepsLine"/>
                        <p>kurier przyjedzie <br/> w dogodnym terminie</p>
                    </div>
                </div>
                <ul className="fourStepsGiveClothes">
                    <li>
                        <Link to="/logowanie/">ODDAJ RZECZY</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Home4Steps;
