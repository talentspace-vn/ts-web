import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './scenes/home';

const App = () => (
  <div>
    <Switch>
      <MainLayout>
        <Route exact path="/" component={Home} />
      </MainLayout>
    </Switch>
    {/* <Switch>
      <LoginSignupLayout>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/apply" component={ApplyPage} />
      </LoginSignupLayout>
    </Switch> */}
  </div>
);

export default App;
