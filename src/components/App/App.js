import React, { Component } from 'react';
import LocationInput from '../LocationInput/LocationInput';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import './App.css';

const OWM_APPID = '1f0aefbe31ba04b794e1d341a1480571';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleZipCodeChange = this.handleZipCodeChange.bind(this);

    this.state = {
      isLoaded: false,
      zipCode: null,
      weatherConditionId: null,
      cityName: null,
      temperature: null,
      error: null
    };
  }

  handleZipCodeChange(newZipCode) {
    if (newZipCode !== this.state.zipCode) {
      this.setState({
        zipCode: newZipCode,
        isLoaded: false
      });

      fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${newZipCode},us&units=imperial&appid=${OWM_APPID}`)
        .then(res => res.json())
        .then(result => {
          try {
            this.setState({
              isLoaded: true,
              weatherConditionId: result.weather[0].id,
              temperature: Math.round(result.main.temp),
              cityName: result.name
            });
          } catch(error) {
            this.setState({
              isLoaded: true,
              error: result.message
            });
          }
        })
        .then(error => {
          this.setState({
            isLoaded: true,
            error: error
          });
        });
    }
  }

  render() {
    if (this.state.error) {
      return (
        <div className="App">
          <LocationInput onZipCodeChange={this.handleZipCodeChange} />
          <h1 style={{fontSize: 3 + 'rem'}}>{this.state.error}</h1>
        </div>
      )
    }
    return (
      <div className="App">
        <LocationInput onZipCodeChange={this.handleZipCodeChange} />
        <h1 style={{fontSize: 3 + 'rem'}}>{this.state.cityName ? this.state.cityName : 'Columbus'}</h1>
        <WeatherIcon weatherConditionId={this.state.weatherConditionId ? this.state.weatherConditionId : '200'} />
        <h1 style={{fontSize: 8 + 'rem'}}>{this.state.temperature}</h1>
      </div>
    );
  }
}

export default App;
