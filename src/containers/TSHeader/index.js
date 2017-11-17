import React from 'react';
import { Row, Col, Layout, Menu } from 'antd';
import './index.less';
import logo from '../../assets/images/logo-header.svg';
import TSButton from '../../components/TSButton';

const { Header } = Layout;

const TSHeader = () => (
  <Header className="header">
    <Row className="header__container" type="flex" align="middle" justify="space-between">
      <Col span={6} >
        <img src={logo} className="header__logo" alt="logo" />
      </Col>
      <Col span={12} >
        <Menu
          className="header__menu"
          theme="dark"
          mode="horizontal"
        >
          <Menu.Item key="1">JOBS</Menu.Item>
          <Menu.Item key="2">CANDIDATES</Menu.Item>
          <Menu.Item key="3">EMPLOYERS</Menu.Item>
          <Menu.Item key="4">PRICING</Menu.Item>
          <Menu.Item key="5">CONTACT US</Menu.Item>
        </Menu>
      </Col>
      <Col span={6} style={{ textAlign: 'right' }}>
        <TSButton className="header__btnSignIn">Sign In</TSButton>
        <TSButton type="primary"> Apply </TSButton>
      </Col>
    </Row>
  </Header>
);

export default TSHeader;
