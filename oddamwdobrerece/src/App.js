import React, {
    Component,
    // Fragment,
} from 'react';
import {
  BrowserRouter as Router,
  Route,
  // Link,
  Switch
} from 'react-router-dom';

import Home from "./components/Home/Home";

// import './App.css';
import './scss/main.scss';
import HomeHeader from "./components/HomeHeader";
import HomeFooter from "./components/HomeFooter";
import Log from "./components/Log";
import SignIn from "./components/SignIn";

class App extends Component {
  render(){
    return (
        <Router>
          <div className="container">
              <HomeHeader/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/logowanie/" component={Log} />
                <Route path="/rejestracja/" component={SignIn} />
            </Switch>
              <HomeFooter/>
          </div>
        </Router>
    );
  }
}

export default App;
