import React from 'react';
import logo from './logo.svg';
import './App.css';
// mine for authentication
import { Authenticator } from 'aws-amplify-react';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

const federated = {
  google_client_id: '429296299604-sl12okipl71ah4thmi5v8ld8uujfji6d.apps.googleusercontent.com',
  facebook_app_id: '',
  amazon_client_id: ''
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Authenticator federated={federated}></Authenticator>
    </div>
  );
}

export default App;
