import React, { Component } from 'react';
import { Row, Col } from 'antd';

import './search-section.less';
import TSInput from '../../../../../components/input';
import TSButton from '../../../../../components/button';
import TSSelect from '../../../../../components/select';

export default class SearchSection extends Component {
  render() {
    return (
      <section>
        <Row className="row">
          <Col span={20} offset={2}>
            <p className="search-title">MEET GREAT COMPANY <span>.</span> GET YOUR DREAM JOB <span>.</span></p>
          </Col>
          <Col span={20} offset={2}>
            <div className="search-field-section">
              <Row>
                <Col span={12}>
                  <TSInput className="keyword" title="Keyword" />
                </Col>
                <Col span={6}>
                  <TSSelect className="search-select" title="Location" />
                </Col>
                <Col span={6}>
                  <TSButton className="search-button-top" type="primary" height={50} borderRadius={4} width={185}>FIND JOB</TSButton>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </section>
    );
  }
}
