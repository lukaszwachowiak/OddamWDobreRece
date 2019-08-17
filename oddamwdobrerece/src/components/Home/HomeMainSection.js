import React, { Component } from 'react';

class HomeMainSection extends Component {
    render(){
        return (
            <article className="mainSectionContainer">
                <section className="mainSectionLeft">
                    {/*<img />*/}
                    {/*https://create-react-app.dev/docs/adding-images-fonts-and-files*/}
                </section>
                <section className="mainSectionRight">
                    <div className="subSectionUpper">
                        <p>Zacznij pomagać!</p>
                        <p>Oddaj niechciane rzeczy w zaufane ręce</p>
                    </div>
                    <div className="subSectionLower">
                        <p>ODDAJ <br/> RZECZY</p>
                        <p>ZORGANIZUJ <br/> ZBIÓRKĘ</p>
                    </div>
                </section>
            </article>
        )
    }
}

export default HomeMainSection;
