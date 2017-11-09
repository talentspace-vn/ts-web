import React from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';
import TSHeader from '../../containers/TSHeader';

const { Footer, Content } = Layout;

const MainLayout = ({ children }) => (
  <Layout>
    <TSHeader />
    <Content>
      {children}
    </Content>
    <Footer>Footer</Footer>
  </Layout>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default MainLayout;
