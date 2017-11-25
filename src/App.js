import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import { MainLayoutRoute, SubLayoutRoute } from './routes';
import Home from './scenes/Home';
import LoginPage from './scenes/LoginPage';
import ApplyCandidate from './scenes/ApplyCandidate';
import ApplyEmployer from './scenes/ApplyEmployer';

class App extends Component {
  render() {
    return (
      <Switch>
        <MainLayoutRoute exact path="/" component={Home} />
        <SubLayoutRoute path="/login" component={LoginPage} />
        <SubLayoutRoute path="/apply-candidate" component={ApplyCandidate} />
        <SubLayoutRoute path="/apply-employer" component={ApplyEmployer} />

      </Switch>
    );
  }
}

export default App;
