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

  showUser = ()=> {
    const { AP } = window;
    //https://developer.atlassian.com/cloud/jira/platform/jsapi/request/
    AP.request('/rest/api/2/myself')
      .then(data => alert(data.body))
      .catch(e => alert(e.err));
  }

  showProject = ()=> {
    //https://developer.atlassian.com/cloud/jira/platform/connect-cookbook/
    const { AP } = window;
    AP.request({
      url: '/rest/api/latest/project',
      success: function(response) {
        // convert the string response to JSON
        response = JSON.parse(response);
    
        // dump out the response to the console
        console.log(response);
      },
      error: function() {
        console.log(arguments);
      }  
    });
  }

  doCookie = ()=> {
    // https://developer.atlassian.com/cloud/jira/platform/jsapi/cookie/
    const { AP } = window;
    AP.cookie.save('my_cookie', 'my value', 1);
    AP.cookie.read('my_cookie', function(value) { alert(value); });
  }

  openIssueDialog = ()=> {
    //https://developer.atlassian.com/cloud/jira/platform/jsapi/jira/
    const { AP } = window;
    AP.jira.openIssueDialog(
      'PROJ-1',
      function(){
        alert('Closed!');
      }
     );
  }

  jqlEditor = ()=> {
    const { AP } = window;

    // https://developer.atlassian.com/cloud/jira/platform/jsapi/jira/
    var options = {
      jql: 'project = PROJ',
      header: 'My title',
      descriptionText: 'My custom description text for dialog',
      submitText: 'My submit label',
      cancelText: 'My cancel label'
    };
    
    var callback = function(obj) {
      alert(obj.jql);
    };
    
    //AP.jira.initJQLEditor();
    AP.jira.showJQLEditor(options, callback);
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
          <Button onClick={this.showUser}>myself via REST</Button>
          <Button onClick={this.showProject}>get Projects</Button>
          <br/>
          <Button onClick={this.doCookie}>Cookie</Button>
          <Button onClick={this.openIssueDialog}>Issue Dialog</Button>
          <Button onClick={this.jqlEditor}>JQL Editor</Button>
        </Tooltip>
      </div>
    );
  }
}

export default App;
