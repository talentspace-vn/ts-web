import React, { Component } from 'react';
import { Row, Col, Form } from 'antd';
import TSInput from '../../components/TSInput';
import TSButton from '../../components/TSButton';
import './index.less';

const FormItem = Form.Item;

class LoginPage extends Component {
  render() {
    return (
      <Row className="loginPage" type="flex" align="middle" justify="center">
        <Col>
          <Row>
            <h1 className="loginPage__title">SIGN IN</h1>
          </Row>
          <Row>
            <Form className="loginPage__form">
              <FormItem className="loginPage__form__input">
                <TSInput title="EMAIL" placeholder="Your Account Email" />
              </FormItem>
              <FormItem className="loginPage__form__input">
                <TSInput title="PASSWORD" placeholder="Your Account Password" />
              </FormItem>
              <FormItem className="loginPage__form__submitBtn">
                <TSButton type="primary">Sign In</TSButton>
              </FormItem>
            </Form>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default LoginPage;
