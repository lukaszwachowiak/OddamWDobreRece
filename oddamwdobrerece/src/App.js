import React, { Component, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import Home from "./components/Home.js";

import './App.css';
import './scss/main.scss';

// import logo from './logo.svg';

class App extends Component {
  render(){
    return (
        <Router>
          <div className="container">
            <Route exact path="/" component={Home} />
          </div>
        </Router>
    );
  }
}

export default App;

{/*<div className="App">*/}
{/*  <header className="App-header">*/}
{/*    <img src={logo} className="App-logo" alt="logo" />*/}
{/*    <p>*/}
{/*      Edit <code>src/App.js</code> and save to reload.*/}
{/*    </p>*/}
{/*    <a*/}
{/*      className="App-link"*/}
{/*      href="https://reactjs.org"*/}
{/*      target="_blank"*/}
{/*      rel="noopener noreferrer"*/}
{/*    >*/}
{/*      Learn React*/}
{/*    </a>*/}
{/*  </header>*/}
{/*</div>*/}