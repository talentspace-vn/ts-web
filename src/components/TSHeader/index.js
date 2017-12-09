import React, { PureComponent } from 'react';
import { Layout, Row, Col, Menu } from 'antd';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import TSButton from '../TSButton';
import Logo from '../../assets/images/logo-header.svg';
import './index.less';

const { Header } = Layout;

class TSHeader extends PureComponent {
  render() {
    const { fixed } = this.props;
    const className = classnames('ts-header', {
      'ts-header--fixed': fixed
    });

    return (
      <Header className={className}>
        <Row className="ts-header__container" type="flex" align="middle">
          <Col span={7}>
            <img
              className="ts-header__logo"
              src={Logo}
              alt="TalentSpace logo"
            />
          </Col>
          <Col span={10}>
            <Menu className="ts-header__menu" mode="horizontal">
              <Menu.Item key="1">Jobs</Menu.Item>
              <Menu.Item key="2">Candidates</Menu.Item>
              <Menu.Item key="3">Employers</Menu.Item>
              <Menu.Item key="4">Pricing</Menu.Item>
              <Menu.Item key="5">Contact Us</Menu.Item>
            </Menu>
          </Col>
          <Col span={7} style={{ textAlign: 'right' }}>
            <TSButton
              size="large"
              type="primary"
              className="ts-header__btn-apply"
            >
              Apply
            </TSButton>
            <TSButton
              size="large"
              icon="login"
              className="ts-header__btn-login"
            >
              Login
            </TSButton>
          </Col>
        </Row>
      </Header>
    );
  }
}

TSHeader.propTypes = {
  fixed: PropTypes.bool
};

TSHeader.defaultProps = {
  fixed: false
};

export default TSHeader;
