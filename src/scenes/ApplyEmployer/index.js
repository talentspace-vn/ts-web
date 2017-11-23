import React, { Component } from 'react';
import { Row, Col, Form, Checkbox, Icon } from 'antd';
import TSInput from '../../components/TSInput';
import TSButton from '../../components/TSButton';
import './index.less';

const FormItem = Form.Item;

class ApplyEmployer extends Component {
  render() {
    return (
      <Row className="applyCadidate" type="flex" align="middle" justify="center">
        <Col>
          <Row>
            <h1 className="applyCadidate__title">APPLY</h1>
          </Row>
          <Row className="applyCadidate__swapRow" >
            <Col span={11} xs={24} sm={11} md={11} lg={11} xl={11}>
              <a className="applyCadidate__swapRow__employer">I’m an employer</a>
            </Col>
            <Col span={2} xs={24} sm={2} md={2} lg={2} xl={2}>
              <Icon type="swap" className="applyCadidate__swapRow__icon" />
            </Col>
            <Col span={11} xs={24} sm={11} md={11} lg={11} xl={11}>
              <a className="applyCadidate__swapRow__candidate">I’m a candidate</a>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
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
            </Col>

          </Row>
        </Col>
      </Row>
    );
  }
}

export default ApplyEmployer;
