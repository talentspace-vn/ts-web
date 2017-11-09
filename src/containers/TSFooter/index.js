import React from 'react';
import { Row, Col, Layout } from 'antd';

import './index.less';
import logo from '../../assets/images/logo-header.svg';

const { Footer } = Layout;

const TSFooter = () => (
  <Footer className="footer">
    <img src={logo} className="logo" alt="logo" />
  </Footer>
);

export default TSFooter;
