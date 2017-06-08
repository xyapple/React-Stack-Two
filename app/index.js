// import React from 'react';
// import ReactDOM from 'react-dom';
//
// import('./index.css')

var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');
var App = require('./components/App');

ReactDOM.render(
  <App />,

  <Vege list={[
    { name: 'Bean', vege: true },
    { name: 'Broccoli', vege: true },
    { name: 'Apple', vege: false },
    { name: 'Banana', vege: false },
    { name: 'Cauliflower', vege: true },
    { name: 'Peach', vege: false } ]}
  />,
document.getElementById('vege');
document.getElementById('app');
);
