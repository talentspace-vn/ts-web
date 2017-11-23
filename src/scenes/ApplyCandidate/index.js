import React, { Component } from 'react';
import { Row, Col, Form, Checkbox, Icon } from 'antd';
import TSInput from '../../components/TSInput';
import TSButton from '../../components/TSButton';
import './index.less';

const FormItem = Form.Item;

class ApplyCandidate extends Component {
  render() {
    return (
      <Row className="applyCadidate" type="flex" align="middle" justify="center">
        <Col>
          <Row>
            <h1 className="applyCadidate__title">APPLY</h1>
          </Row>
          <Row className="applyCadidate__swapRow">
            <a className="applyCadidate__swapRow__employer">I’m an employer</a> <Icon type="swap" className="applyCadidate__swapRow__icon" /> <a className="applyCadidate__swapRow__candidate">I’m a candidate</a>
          </Row>
          <Row>
            <Form className="applyCadidate__form">
              <FormItem className="lapplyCadidate__form__input">
                <TSInput title="EMAIL" placeholder="Your Account Email" />
              </FormItem>
              <FormItem className="applyCadidate__form__input">
                <TSInput type="password" title="PASSWORD" placeholder="Your Account Password" />
              </FormItem>
              <FormItem className="applyCadidate__form__input">
                <TSInput type="password" title="CONFIRM PASSWORD" placeholder="Your Confirm Password" />
              </FormItem>
              <FormItem>
                <Checkbox className="applyCadidate__form__Item__Checkbox">By signing up you agree our Terms & Conditions</Checkbox>
              </FormItem>
              <FormItem className="lapplyCadidate_form__submitBtn">
                <TSButton type="primary">Apply</TSButton>
              </FormItem>
            </Form>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default ApplyCandidate;
