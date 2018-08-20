import React, { PureComponent } from 'react';
import logo from './logo.svg';

class Header extends PureComponent {
  render() {
    return (
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
      </header>
    );
  }
}

export default Header;
