// import React from 'react';
// import {ReactRouter, Router, BrowserRouter,
//   Route, Switch} from 'react-router-dom';
//
// import Nav from './Nav';
// import Home from './Home';

var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Nav = require('./Nav');
var Home = require('./Home');
var Vege =

class App extends React.Component {
  render() {
    return(
      <Router>
        <div className = 'container'>
          <Nav/>
          <Switch>
           <Route exact path='/' component={Home} />
           <Route render={function () {
              return <p>Not Found</p>
            }} />
          </Switch>
        </div>
      </Router>

    )

  }
}

module.exports = App;
