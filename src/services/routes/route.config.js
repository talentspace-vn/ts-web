import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../../scenes/main/home';
// The Header creates links that can be used to navigate
// between routes.

// /////////////////////////////////////////////////////////
// then our route config
export const routes = [
  { path: '/',
    component: Home
  }
];


// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
export const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => (
    // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes} />
    )}
  />
);
