import React, { PureComponent } from 'react';
import TSTextField from '../../components/TSTextField';
import TSButton from '../../components/TSButton';
import { Icon, Row, Col, Checkbox } from 'antd';
import './index.less';

class LoginPage extends PureComponent {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  render() {
    return (
      <div className="App">
        <Row className="login-page">
          <Row type="flex" justify="space-around" align="middle" className="ts-login-header">
            <Col span={8}>
              <Col span={6} offset={6} />
              <span className="ts-login-header_login-text">Login</span> <br />
              <Col span={6} offset={6} />
              <span className="ts-login-header_sub-title">Keep up to date with the latest news</span>
            </Col>
            <Col span={8} offset={8}> Home - Pages - Contact </Col>
          </Row>
          <Row className="ts-login-content">
            <Col span={12} offset={6} className="ts-login-content_wrapper">
              <Row justify="center" className="ts-login-content_wrapper_title">
                <span> Lorem ipsum dolor sit amet consectetur adipiscing elit odio duis risus at lobortis ullamcorper aptent venenatis, mi sem posuere est consequat rutrum.</span>
              </Row>
              <Row type="flex" justify="center">
                <Col span={13} style={{ marginBottom: '0' }}>
                  <TSTextField type="text" placeholder="Username" prefix={<Icon type="user" />} />
                  <TSTextField type="password" placeholder="Password" prefix={<Icon type="key" />} />
                </Col>
                <Col span={13}>
                  <Row gutter={16}>
                    <Col span={12}><Checkbox onChange={this.onChange}>Remember me</Checkbox> </Col>
                    <Col span={12} style={{ textAlign: 'right' }}><a>Forgot Password?</a></Col>
                  </Row>
                </Col>
                <Col span={13}>
                  <TSButton size="large" className="ts-login-content__btn-login">
                    Login
                  </TSButton>
                </Col>
                <Col span={13}>
                  <Row type="flex" justify="center" align="middle">
                    <Col xs={2} sm={4} md={6} lg={8} xl={10} style={{ height: '1px', backgroundColor: '#000000' }} />
                    <Col xs={20} sm={16} md={12} lg={8} xl={4} style={{ textAlign: 'center' }}>Or</Col>
                    <Col xs={2} sm={4} md={6} lg={8} xl={10} style={{ height: '1px', backgroundColor: '#000000' }} />
                  </Row>
                </Col>
                <Col span={13}>
                  <Row type="flex" justify="center">
                    <Col span={4} style={{ textAlign: 'center' }}>
                      <TSButton size="large" icon="facebook" className="ts-login-content__btn-login-social ts-login-content__btn-login-social___fa" />
                    </Col>
                    <Col span={4} style={{ textAlign: 'center' }}>
                      <TSButton size="large" icon="twitter" className="ts-login-content__btn-login-social ts-login-content__btn-login-social___tw" />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Row>
      </div>
    );
  }
}

export default LoginPage;
