import React, { PureComponent } from 'react';
import TSTextField from '../../components/TSTextField';
import { Icon, Row, Col } from 'antd';
import './index.less';

class LoginPage extends PureComponent {
  render() {
    return (
      <div className="App">
        <Row>
          <Col span={12} offset={6}>col-12 col-offset-6
            <TSTextField prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default LoginPage;
