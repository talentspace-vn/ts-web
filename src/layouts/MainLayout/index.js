import React from 'react';
import { Layout, Affix } from 'antd';
import PropTypes from 'prop-types';
import TSHeader from '../../containers/TSHeader';
import TSFooter from '../../containers/TSFooter';

const { Content } = Layout;

const MainLayout = ({ children }) => (
  <Layout>
    <Affix>
      <TSHeader />
    </Affix>

    <Content>
      {children}
    </Content>
    <TSFooter />
  </Layout>
);

MainLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default MainLayout;
