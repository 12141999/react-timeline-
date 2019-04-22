import React, { Component } from 'react';
import './App.css';
import Api from './Components/api';
import Layout from './Components/layout';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Layout />
         <Api /> 
      </div>
    );
  }
}

export default App;
