import React from 'react';
import { Row, Col } from 'antd';
import './header.less';
import logo from '../../assets/images/logo-header.svg';
import TSButton from '../../components/button';


const Header = () => (
  <header className="header">
    <Row>
      <Col span={6}>
        <img src={logo} className="logo" alt="logo" />
      </Col>
      <Col span={12}>
        <ul>
          <li><a>JOBS</a></li>
          <li><a>CANDIDATES</a></li>
          <li><a>EMPLOYERS</a></li>
          <li><a>PRICING</a></li>
          <li><a>CONTACT US</a></li>
        </ul>
      </Col>
      <Col span={6}>
        <TSButton className="button-signin">Sign In</TSButton>
        <TSButton className="button-apply" type="primary"> Apply </TSButton>
      </Col>
    </Row>
    <div className="boder-bottom" />
  </header>
);

export default Header;
