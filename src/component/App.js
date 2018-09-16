import React, { Component } from 'react';
import logo from '../logo.svg';
import '../style/App.css';
import Board from './Board';
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <Redirect from="/" to="home" />
          <Route path='/home' render={() => {
            return (<Link to="/start"><button>Start</button></Link>);
          }}>
          </Route>
          <Route path="/start" component={Board} />
        </div>
      </Router>
    );
  }
}

export default App;
