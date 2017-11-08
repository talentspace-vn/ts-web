import React, { Component } from 'react';
import Header from '../../layouts/header';
import Footer from '../../layouts/footer';

import { routes, RouteWithSubRoutes } from '../../services/routes/route.config';

export default class Main extends Component {
  render() {
    return (
      <main>
        <Header />
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={route.path} {...route} />
        ))}
        <Footer />
      </main>
    );
  }
}

