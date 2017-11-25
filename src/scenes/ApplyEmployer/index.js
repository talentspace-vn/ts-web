import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import { Row, Col, Form, Icon } from 'antd';
import TSInput from '../../components/TSInput';
import TSButton from '../../components/TSButton';
import './index.less';

const FormItem = Form.Item;

class ApplyEmployer extends Component {
  handleClick(e) {
    e.preventDefault();
    this.context.router.push('/about');
  }
  render() {
    return (
      <Row className="applyEmployer" type="flex" align="middle" justify="center">
        <Col>
          <Row>
            <h1 className="applyEmployer__title">APPLY</h1>
          </Row>
          <Row className="applyEmployer__swapRow" >
            <Col span={11} xs={24} sm={11} md={11} lg={11} xl={11}>
              <a className="applyEmployer__swapRow__employer">I’m an employer</a>
            </Col>
            <Col span={2} xs={24} sm={2} md={2} lg={2} xl={2}>
              <Icon type="swap" className="applyEmployer__swapRow__icon" />
            </Col>
            <Col span={11} xs={24} sm={11} md={11} lg={11} xl={11}>
              <Link to="/apply-candidate"><a className="applyEmployer__swapRow__candidate">I’m a candidate</a></Link>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form className="applyEmployer__form">
                <FormItem className="lapplyEmployer__form__input">
                  <TSInput title="COMPANY NAME" placeholder="Your Company Name" />
                </FormItem>
                <FormItem className="applyEmployer__form__input">
                  <TSInput type="COMPANY PHONE NUMBER" title="PASSWORD" placeholder="Your Company Phone Number" />
                </FormItem>
                <FormItem className="applyEmployer__form__input">
                  <TSInput title="FULL NAME" placeholder="Your Full Name" />
                </FormItem>
                <FormItem className="applyEmployer__form__input">
                  <TSInput title="EMAIL" placeholder="Your Email" />
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
