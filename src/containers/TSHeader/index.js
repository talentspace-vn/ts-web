import React from 'react';
import { Row, Col, Layout, Menu, Dropdown, Icon, Button } from 'antd';
import './index.less';
import logo from '../../assets/images/logo-header.svg';
import TSButton from '../../components/TSButton';

const { Header } = Layout;
const menu = (
  <Menu>
    <Menu.Item key="0">
      <a>Jobs</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a>Candidates</a>
    </Menu.Item>
    <Menu.Item key="2">
      <a>Employers</a>
    </Menu.Item>
    <Menu.Item key="3">
      <a>Pricing</a>
    </Menu.Item>
    <Menu.Item key="4">
      <a>Contact us</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="5">Sign Up</Menu.Item>
    <Menu.Item key="6">Login</Menu.Item>
  </Menu>
);

const TSHeader = () => (
  <Header className="header">
    <Row className="header__container" type="flex" align="middle" justify="space-between">
      <Col span={6} >
        <img src={logo} className="header__logo" alt="logo" />
      </Col>
      <Col span={12} className="header__full">
        <Menu
          className="header__menu"
          theme="dark"
          mode="horizontal">
          <Menu.Item key="1">Jobs</Menu.Item>
          <Menu.Item key="2">Candidates</Menu.Item>
          <Menu.Item key="3">Employers</Menu.Item>
          <Menu.Item key="4">Pricing</Menu.Item>
          <Menu.Item key="5">Contact us</Menu.Item>
        </Menu>
      </Col>
      <Col span={6} className="header__full">
        <TSButton className="header__btnSignIn">Sign In</TSButton>
        <TSButton className="header__btnApply" type="primary"> Apply </TSButton>
      </Col>
      <Col className="header__dropdown">
        <Dropdown overlay={menu} trigger={['click']}>
          <TSButton className="header__btnDropdown" borderRadius={4} icon="bars" />
        </Dropdown>
      </Col>
    </Row>
  </Header>
);

export default TSHeader;
