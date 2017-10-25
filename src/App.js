import React, { Component } from 'react';
import MainPageComponent from './components/mainPageComponent';
import Youtube from './components/youtube.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainPageComponent></MainPageComponent>
        <Youtube></Youtube>
      </div>
    );
  }
}

export default App;
