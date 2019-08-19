import React, { Component } from 'react';
import {Link} from "react-router-dom";
import HomeHeroImage from "../../assets/Home-Hero-Image.jpg";

class HomeMainSection extends Component {
    render(){
        return (
            <article className="mainSectionContainer">
                <section className="mainSectionLeft">
                    <img src={HomeHeroImage} alt="HomeHeroImage" className="mainSectionImage"/>
                    {/*https://create-react-app.dev/docs/adding-images-fonts-and-files*/}
                </section>
                <section className="mainSectionRight">
                    <div className="subSectionUpper">
                        <p>Zacznij pomagać!</p>
                        <p>Oddaj niechciane rzeczy w zaufane ręce</p>
                    </div>
                    <div className="subSectionLower">
                        <Link to="/logowanie/"><p>ODDAJ <br/> RZECZY</p></Link>
                        <p>ZORGANIZUJ <br/> ZBIÓRKĘ</p>
                    </div>
                </section>
            </article>
        )
    }
}

export default HomeMainSection;
