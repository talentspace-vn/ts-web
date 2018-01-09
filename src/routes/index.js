import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Spin } from 'antd';
import Loadable from 'react-loadable';
import DefaultLayout from '../layouts/DefaultLayout';
import Page404 from '../containers/Page404';
import LoginPage from '../containers/LoginPage';
import ApplyPage from '../containers/ApplyPage';

/**
 * Example for code-splitting with react-router using react-loadable library
 * Reason: Async load component to improve initial loading time
 * Reference: https://blog.logrocket.com/advanced-react-router-concepts-code-splitting-animated-transitions-scroll-restoration-recursive-17096c0cf9db
 */
const AsyncHomePage = Loadable({
  loader: () => import('../containers/HomePage'),
  loading: () => <Spin />
});

const AsyncBrowseJobPage = Loadable({
  loader: () => import('../containers/BrowseJobPage'),
  loading: () => <Spin />
});

class Routes extends PureComponent {
  render() {
    return (
      <DefaultLayout>
        <Switch>
          <Route exact path="/" component={AsyncHomePage} />
          <Route exact path="/jobs" component={AsyncBrowseJobPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/apply" component={ApplyPage} />
          <Route component={Page404} />
        </Switch>
      </DefaultLayout>
    );
  }
}

export default Routes;
