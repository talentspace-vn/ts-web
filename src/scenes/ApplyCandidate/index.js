import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Row, Col, Form, Icon, Upload, message, Button } from 'antd';
import TSInput from '../../components/TSInput';
import TSButton from '../../components/TSButton';
import './index.less';

const FormItem = Form.Item;
const props = {
  name: 'file',
  action: '//jsonplaceholder.typicode.com/posts/',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
class ApplyCandidate extends Component {
  render() {
    return (
      <Row className="applyCadidate" type="flex" align="middle" justify="center">
        <Col>
          <Row>
            <h1 className="applyCadidate__title">APPLY</h1>
          </Row>
          <Row className="applyCadidate__swapRow" >
            <Col span={11} xs={24} sm={11} md={11} lg={11} xl={11}>
              <Link to="/apply-employer"><a className="applyCadidate__swapRow__employer">I’m an employer</a></Link>
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
                <FormItem className="applyCadidate__form__input">
                  <TSInput title="FULL NAME" placeholder="Your Full Name" />
                </FormItem>
                <FormItem className="applyCadidate__form__input">
                  <TSInput title="SKYPE ID" placeholder="Your Skype ID" />
                </FormItem>
                <FormItem className="applyCadidate__form__input">
                  <Upload {...props} className="applyCadidate__form__upload">
                    <Button>
                      <Icon type="upload" /> Click to Upload your CV
                    </Button>
                  </Upload>
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

export default ApplyCandidate;
