import React, { Component } from 'react';
import Header from '../Header/Header';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherIcon weatherConditionId='602' />
      </div>
    );
  }
}

export default App;
