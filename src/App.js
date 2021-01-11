import { render } from '@testing-library/react';
import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";//import this in terminal

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <React.Fragment>
        <Navbar />
        <div className="container">
          <Switch>
          <Route exact path="/" Component={Index} />
          </Switch>
        </div>
      </React.Fragment>
      </Router>
    );
  }
}

export default App;