import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@atlaskit/button';

class App extends Component {

  doClick = (e)=> {
    console.log("doClick");
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button onClick={this.doClick}>Hello world</Button>
      </div>
    );
  }
}

export default App;
