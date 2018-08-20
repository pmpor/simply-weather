import React, { PureComponent } from 'react';
import './WeatherIcon.css';

class WeatherIcon extends PureComponent {
  render() {
    return (
      <div className="WeatherIcon-wrapper">
        <i className={`wi wi-owm-${this.props.weatherConditionId}`}></i>
      </div>
    );
  }
}

export default WeatherIcon;
