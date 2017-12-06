import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Spin } from 'antd';
import Loadable from 'react-loadable';

/**
 * Example for code-splitting with react-router using react-loadable library
 * Reason: Async load component to improve initial loading time
 * Reference: https://blog.logrocket.com/advanced-react-router-concepts-code-splitting-animated-transitions-scroll-restoration-recursive-17096c0cf9db
 */
const AsyncHomePage = Loadable({
  loader: () => import('../containers/HomePage'),
  loading: () => <Spin />,
});

class Routes extends PureComponent {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={AsyncHomePage} />
      </Switch>
    );
  }
}

export default Routes;
