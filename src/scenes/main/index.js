import React, { Component } from 'react'
import Header from '../../layouts/header'
import { Button } from 'antd';
import {routes, RouteWithSubRoutes } from '../../services/routes/route.config'


export default class Main extends Component {
    render() {
        return (
            <main>
                <Header />
                <Button type="primary">Button</Button>
                
                {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route}/>
              ))}
            </main>
        )
    }
}



