import React from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';
import Logo from '../../assets/images/logo-header.svg';
import './index.less';

const { Content, Header } = Layout;

const SubLayout = ({ children }) => (
  <Layout className="subLayout">
    <Header className="subLayout__header">
      <img className="subLayout__header__logo" src={Logo} alt="logo" />
    </Header>
    <hr className="subLayout__separator" />
    <Content className="subLayout__content">
      {children}
    </Content>
  </Layout>
);

SubLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default SubLayout;
