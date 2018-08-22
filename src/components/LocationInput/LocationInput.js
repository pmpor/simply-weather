import React, { Component } from 'react';
import './LocationInput.css';

class LocationInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      zipCode: ''
    };
  }

  onInputChange(newZipCode) {
    this.setState({
      zipCode: newZipCode
    });
  }

  onInputBlur(newZipCode) {
    this.props.onZipCodeChange(newZipCode);
  }

  onInputEnterKeypress(event) {
    if (event.which === 13) {
      this.props.onZipCodeChange(event.target.value);
    }
  }

  render() {
    return (
      <div className="LocationInput-wrapper">
        <input 
          value={this.state.zipCode} 
          onChange={event => this.onInputChange(event.target.value)} 
          onBlur={event => this.onInputBlur(event.target.value)} 
          onKeyPress={event => this.onInputEnterKeypress(event)} />
      </div>
    );
  }
}

export default LocationInput;
