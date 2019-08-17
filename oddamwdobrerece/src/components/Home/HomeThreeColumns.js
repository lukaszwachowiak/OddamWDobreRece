import React, { Component } from 'react';

class HomeThreeColumns extends Component {
    render(){
        return (
            <article className="threeColumnsContainer">
                <section className="threeColumnsLeftSection">
                    <div className="threeColumnsNumber">10</div>
                    <h10>ODDANYCH WORKÓW</h10>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisc <br/>
                        Pellentesque vel enim a elit viverra elementuma <br/>
                        Alliquam erat volutpat.
                    </p>
                </section>
                <section className="threeColumnsMiddleSection">
                    <div className="threeColumnsNumber">5</div>
                    <h10>WSPARTYCH ORGANIZACJI</h10>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisc <br/>
                        Pellentesque vel enim a elit viverra elementuma <br/>
                        Alliquam erat volutpat.
                    </p>
                </section>
                <section className="threeColumnsRightSection">
                    <div className="threeColumnsNumber">7</div>
                    <h10>ZORGANIZOWANYCH ZBIÓREK</h10>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisc <br/>
                        Pellentesque vel enim a elit viverra elementuma <br/>
                        Alliquam erat volutpat.
                    </p>
                </section>
            </article>
        )
    }
}

export default HomeThreeColumns;
