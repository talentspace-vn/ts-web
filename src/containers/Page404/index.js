import React, { PureComponent } from 'react';
import { Row, Col } from 'antd';
import Logo from '../../assets/images/404.png';
import './index.less';

class Page404 extends PureComponent {
  render() {
    return (
      <Row className="page-404" type="flex" justify="center" align="middle">
        <Col span={24}>
          <img className="page-404__logo" src={Logo} alt="404" />
        </Col>
        <Col span={24} className="page-404__title">
          We Are Sorry, Page Not Found
        </Col>
        <Col span={24} className="page-404__description">
          Unfortunately the page you were looking for could not be found. It may
          be temporarily unavailable, moved or no longer exist. Check the URL
          you entered for any mistakes and try again.
        </Col>
      </Row>
    );
  }
}

export default Page404;
