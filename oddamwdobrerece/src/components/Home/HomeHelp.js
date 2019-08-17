import React, { Component } from 'react';

class HomeHelp extends Component {
    state = {
        fundations: []
    };

    componentDidMount() {
        fetch("http://localhost:3001/foundations")
            .then(res => res.json())
            .then(res => this.setState({
                fundations: res
            }))
    }

    render(){
        console.log(this.state);
        return (
            <div id="help">
                <div>fundacje</div>
            </div>
        )
    }
}

export default HomeHelp;
