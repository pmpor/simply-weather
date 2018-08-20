import React, { Component } from 'react';
import Header from '../Header/Header';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      currentWeatherId: null,
      error: null
    };
  }

  componentDidMount() {
    fetch("https://api.openweathermap.org/data/2.5/weather?zip=41101,us&units=imperial&appid=1f0aefbe31ba04b794e1d341a1480571")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            currentWeatherConditionId: result.weather[0].id,
            currentTemperature: Math.round(result.main.temp),
            currentCityName: result.name
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    //TODO: Move styles into css
    return (
      <div className={`App ${!this.state.isLoaded ? 'blur' : ''}`}>
        <h1 style={{fontSize: 3 + 'rem'}}>{this.state.currentCityName ? this.state.currentCityName : 'Columbus'}</h1>
        <WeatherIcon weatherConditionId={this.state.currentWeatherConditionId ? this.state.currentWeatherConditionId : '200'} />
        <h1 style={{fontSize: 8 + 'rem'}}>{this.state.currentTemperature}</h1>
      </div>
    );
  }
}

export default App;
