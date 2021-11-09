// App.js
import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './sass/app.scss';

// Import views
import Home from './views/Home';
import Destination from './views/Destination';
import Crew from './views/Crew';
import Technology from './views/Technology';


class App extends Component {
  render() {
    return (
      <Router className="App">
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/destination'>
            <Destination />
          </Route>
          <Route path='/crew'>
            <Crew />
          </Route>
          <Route path='/technology'>
            <Technology />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default hot(module)(App);