import React, { PureComponent } from 'react';
import logo from './logo.svg';
import './index.less';

class HomePage extends PureComponent {
  render() {
    return (
      <div className="App">
        <div className="App__header">
          <img src={logo} className="App__logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App__intro">
          Hello World!
        </p>
      </div>
    );
  }
}

export default HomePage;
