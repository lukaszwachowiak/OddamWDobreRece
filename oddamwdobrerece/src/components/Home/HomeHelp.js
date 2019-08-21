import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
// https://www.npmjs.com/package/react-paginate
import { ReactComponent as Decoration } from '../../assets/Decoration.svg';

class HomeHelp extends Component {
    constructor(props){
        super(props);
        this.state={
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
                        key={foundation.id}
                    >
                        <div>
                            <div>{foundation.label}</div>
                            <div>{foundation.items[0].mission}</div>
                        </div>
                        <div>{foundation.items[0].description}</div>
                    </div>
                ));
        } else if (this.state.current === 1) {
            return this.state.foundations
                .slice(3, 6)
                .map(foundation => (
                    <div
                        key={foundation.id}
                    >
                        <div>
                            <div>{foundation.label}</div>
                            <div>{foundation.items[0].mission}</div>
                        </div>
                        <div>{foundation.items[0].description}</div>
                    </div>
                ));
        } else {
            return this.state.foundations
                .slice(6, 9)
                .map(foundation => (
                    <div
                        key={foundation.id}
                    >
                        <div>
                            <div>{foundation.label}</div>
                            <div>{foundation.items[0].mission}</div>
                        </div>
                        <div>{foundation.items[0].description}</div>
                    </div>
                ));
        }
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
            <div id="help">
                <h2 className="whoWeHelpHeader">Komu pomagamy?</h2>
                <Decoration/>
                <div>
                    <div>Fundacjom</div>
                    <div>Organizacjom pozarządowym</div>
                    <div>Lokalnym zbiórkom</div>
                </div>
                <p style={textStyle} className="whoWeHelpText">{text}</p>

                {this.foundationTabs}
                {/* renderowanie warunkowe - event na kliknięcie diva z tekstem FUNDACJOM, defaultowo true!
                {this.state.JAKASNAZWA ? this.foundationTabs : null}
                */}

                <ReactPaginate
                    previousLabel={''} // reset
                    nextLabel={''} // reset

                    pageCount={3}
                    marginPagesDisplayed={3}
                    pageRangeDisplayed={3}
                    initialPage={0}

                    onPageChange={this.handlePageClick} // funkcja na zmianę strony

                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active'}
                    // pageClassName // li
                    // pageLinkClassName // a
                    // activeLinkClassName // active a
                />
            </div>
        )
    }
}

export default HomeHelp;
