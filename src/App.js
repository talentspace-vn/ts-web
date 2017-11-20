import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import { MainLayoutRoute, SubLayoutRoute } from './routes';
import Home from './scenes/home';
import LoginPage from './scenes/LoginPage';

class App extends Component {
  render() {
    return (
      <Switch>
        <MainLayoutRoute exact path="/" component={Home} />
        <SubLayoutRoute path="/login" component={LoginPage} />
      </Switch>
    );
  }
}

export default App;
