import React, { PureComponent } from 'react';
import { Layout, BackTop } from 'antd';
import PropTypes from 'prop-types';
import TSHeader from '../components/TSHeader';
import TSFooter from '../components/TSFooter';
import './index.less';

const { Content } = Layout;

class DefaultLayout extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <Layout className="ts-layout">
        <TSHeader />
        <Content>
          {children}
        </Content>
        <TSFooter />
        <BackTop />
      </Layout>
    );
  }
}

DefaultLayout.propTypes = {
  children: PropTypes.node
};

export default DefaultLayout;
