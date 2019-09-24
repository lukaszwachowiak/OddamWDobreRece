import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
// https://www.npmjs.com/package/react-paginate
import { ReactComponent as Decoration } from '../../assets/Decoration.svg';

class HomeHelp extends Component {
    constructor(props){
        super(props);
        this.state={
            number: 0,
            pages: 3,
            foundations: [],
            current: 0,
            organisations: [],
            locals: [],
        }
    }

    get foundationTabs() {
        if (this.state.current === 0){
            return this.state.foundations
                .slice(0, 3)
                .map(foundation => (
                    <div
                        className="whoWeHelpDataContainer"
                        key={foundation.id}
                    >
                        <div className="whoWeHelpLeftDatas">
                            <div className="whoWeHelpLeftDatasTitle">{foundation.label}</div>
                            <div className="whoWeHelpLeftDatasDescription">{foundation.items[0].mission}</div>
                        </div>
                        <div className="whoWeHelpRightDatas">
                            <div>{foundation.items[0].description}</div>
                        </div>
                        <hr className="whoWeHelpHR"/>
                    </div>
                ));
        } else if (this.state.current === 1) {
            return this.state.foundations
                .slice(3, 6)
                .map(foundation => (
                    <div
                        className="whoWeHelpDataContainer"
                        key={foundation.id}
                    >
                        <div className="whoWeHelpLeftDatas">
                            <div className="whoWeHelpLeftDatasTitle">{foundation.label}</div>
                            <div className="whoWeHelpLeftDatasDescription">{foundation.items[0].mission}</div>
                        </div>
                        <div className="whoWeHelpRightDatas">
                            <div>
                                {foundation.items[0].description}
                            </div>
                        </div>
                        <hr className="whoWeHelpHR"/>
                    </div>
                ));
        } else {
            return this.state.foundations
                .slice(6, 9)
                .map(foundation => (
                    <div
                        className="whoWeHelpDataContainer"
                        key={foundation.id}
                    >
                        <div className="whoWeHelpLeftDatas">
                            <div className="whoWeHelpLeftDatasTitle">{foundation.label}</div>
                            <div className="whoWeHelpLeftDatasDescription">{foundation.items[0].mission}</div>
                        </div>
                        <div className="whoWeHelpRightDatas">
                            <div>
                                {foundation.items[0].description}
                            </div>
                        </div>
                        <hr className="whoWeHelpHR"/>
                    </div>
                ));
        }
    }

    get OrganisationTabs(){
        if (this.state.current === 0 || this.state.current > 1){
            return this.state.organisations
                .slice(0, 3)
                .map(organisation => (
                    <div
                        className="whoWeHelpDataContainer"
                        key={organisation.id}
                    >
                        <div className="whoWeHelpLeftDatas">
                            <div className="whoWeHelpLeftDatasTitle">{organisation.label}</div>
                            <div className="whoWeHelpLeftDatasDescription">{organisation.items[0].mission}</div>
                        </div>
                        <div className="whoWeHelpRightDatas">
                            <div>{organisation.items[0].description}</div>
                        </div>
                        <hr className="whoWeHelpHR"/>
                    </div>
                ));
        } else if (this.state.current === 1) {
            return this.state.organisations
                .slice(3, 6)
                .map(organisation => (
                    <div
                        className="whoWeHelpDataContainer"
                        key={organisation.id}
                    >
                        <div className="whoWeHelpLeftDatas">
                            <div className="whoWeHelpLeftDatasTitle">{organisation.label}</div>
                            <div className="whoWeHelpLeftDatasDescription">{organisation.items[0].mission}</div>
                        </div>
                        <div className="whoWeHelpRightDatas">
                            <div>
                                {organisation.items[0].description}
                            </div>
                        </div>
                        <hr className="whoWeHelpHR"/>
                    </div>
                ));
        } else {
            return null;
        }
    }

    get LocalTabs() {
        return this.state.locals.map( local => (
            <div
                className="whoWeHelpDataContainer"
                key={local.id}
            >
                <div className="whoWeHelpLeftDatas">
                    <div className="whoWeHelpLeftDatasTitle">{local.label}</div>
                    <div className="whoWeHelpLeftDatasDescription">{local.items[0].mission}</div>
                </div>
                <div className="whoWeHelpRightDatas">
                    <div>
                        {local.items[0].description}
                    </div>
                </div>
                <hr className="whoWeHelpHR"/>
            </div>
            )
        )
    }

    componentDidMount() {
        fetch("http://localhost:3001/foundations")
            .then(res => res.json())
            .then(data => this.setState({
                foundations: data,
            }))
            .catch(err => {
            console.log(err);
        });

        fetch("http://localhost:3001/organisations")
            .then(res => res.json())
            .then(data => this.setState({
                organisations: data,
            } ))
            .catch(err => {
                console.log(err);
            });

        fetch("http://localhost:3001/locals")
            .then(res => res.json())
            .then(data => this.setState({
                locals: data,
            } ))
            .catch(err => {
                console.log(err);
            });
    }

    handlePageClick = data => {
        // console.log(data);
        let selected = data.selected;
        this.setState({
            current: selected,
        });
        // console.log(selected);
    };

    openFoundations(e){
        e.preventDefault();
        this.setState({
            number: 0,
            pages: 3,
        })
    }

    openOrganisations(e){
        e.preventDefault();
        this.setState({
            number: 1,
            pages: 2,
        })
    }

    openLocal(e){
        e.preventDefault();
        this.setState({
            number: 2,
        })
    }

    render(){
        // console.log(this.state.foundations);
        // console.log(this.state.organisations);
        // console.log(this.state.locals);
        const text = "W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z " +
            "którymi współpracujemy. Możesz sprawdzić czym się zajmują, " +
            "komu pomagają i czego potrzebują.";
        const textStyle = {
            width: "39rem",
        };

        return (
            <div id="help" className="whoWeHelpContainer">
                <div>
                    <h2 className="whoWeHelpHeader">Komu pomagamy?</h2>
                    <Decoration className="whoWeHelpDecoration"/>
                    <div className="whoWeHelpNavigation">
                        <div onClick={e => this.openFoundations(e)}>Fundacjom</div>
                        <div onClick={e => this.openOrganisations(e)}>Organizacjom <br/> pozarządowym</div>
                        <div onClick={e => this.openLocal(e)}>Lokalnym <br/> zbiórkom</div>
                    </div>
                    <p style={textStyle} className="whoWeHelpText">{text}</p>

                    {this.state.number === 0 ? this.foundationTabs : null}
                    {this.state.number === 1 ? this.OrganisationTabs : null}
                    {this.state.number === 2 ? this.LocalTabs : null}

                    {this.state.number < 2 ?
                        <ReactPaginate
                            previousLabel={''} // reset
                            nextLabel={''} // reset

                            pageCount={this.state.pages} // ilość stron zależna od ilości informacji
                            marginPagesDisplayed={3}
                            pageRangeDisplayed={3}
                            initialPage={0}

                            onPageChange={this.handlePageClick} // funkcja na zmianę strony

                            containerClassName={'pagination'}
                            subContainerClassName={'pages pagination'}
                            activeClassName={'active'}
                            pageClassName={'subPages'} // li
                            // pageLinkClassName // a
                            // activeLinkClassName // active a
                        /> : null }
                </div>
            </div>
        )
    }
}

export default HomeHelp;
