import React, { PureComponent } from 'react';
import { Layout } from 'antd';
import './index.less';

const { Footer } = Layout;

class TSFooter extends PureComponent {
  render() {
    return (
      <Footer className="ts-footer">
        © 2017 TalentSpace All rights reserved. Design by TS team
      </Footer>
    );
  }
}

export default TSFooter;
