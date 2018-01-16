import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { inputFile, outputFile } from './testSource.js';
var parse = require('csv-parse');
var async = require('async');

class App extends Component {

  constructor(props) {
    super(props);
    
    const parser = (inputFile) => { parse(inputFile, function (err, data) {
      // console.log(JSON.stringify(data));
      // console.log(err);
      let index = 0;
      async.eachSeries(data, function (line, callback) {
        // do something with the line
        console.log('line',line)
        if (index === 0) { //header

        }
        else { //content

        }
        // doSomething(line).then(function() {
  
        //   // when processing finishes invoke the callback to move to the next one
          index = index + 1;
          callback();
        // });
      })
    })};  
    parser(inputFile());
    parser(outputFile());
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
