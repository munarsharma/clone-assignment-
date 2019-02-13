import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import MainPage from './components/homepage/MainPage';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainPage />
      </div>
    );
  }
}

export default App;
