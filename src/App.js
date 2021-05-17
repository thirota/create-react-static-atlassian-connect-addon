import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@atlaskit/button';
import Tooltip from '@atlaskit/tooltip';

class App extends Component {

  doClick = (e)=> {
    console.log("doClick");

    //https://github.com/rhysdiab/atlassian-connect-express-next/blob/master/isomorphic/atlassianApiCall.js
    //XXX What?
    const { AP } = window;
    //synonym?
    //const AP = window.AP;

    //https://developer.atlassian.com/cloud/jira/platform/jsapi/user/
    AP.user.getCurrentUser(function (user) {
      console.log("The Atlassian Account ID is", user.atlassianAccountId);
    });    
  }

  showFlag = ()=> {
    const { AP } = window;
    // https://developer.atlassian.com/cloud/jira/platform/jsapi/flag/
    // Display a nice green flag using the Flags JavaScript API.
    var flag = AP.flag.create({
      title: 'Successfully created a flag.',
      body: 'This is a flag.',
      type: 'success',
      actions: {
        'actionkey': 'Click me'
      }
    });
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
        <Tooltip content="This is AtlasKit tooltip!!">
          <Button appearance="primary" onClick={this.doClick}>Hello AtlasKit</Button>
          <Button onClick={this.showFlag}>Flag</Button>
        </Tooltip>
      </div>
    );
  }
}

export default App;
