import React, { Component } from 'react';
import { Row, Col } from 'antd';

import './search-section.less';
import TSInput from '../../../../components/TSInput';
import TSButton from '../../../../components/TSButton';
import TSSelect from '../../../../components/TSSelect';

export default class SearchSection extends Component {
  render() {
    return (
      <section className="search-section">
        <Row>
          <Col span={20} offset={2}>
            <p className="search-section_title">MEET GREAT COMPANY <span>.</span> GET YOUR DREAM JOB <span>.</span></p>
          </Col>
          <Col span={20} offset={2}>
            <div className="search-section__field">
              <Row>
                <Col span={12}>
                  <TSInput className="search-section__field_input" title="Keyword" />
                </Col>
                <Col span={6}>
                  <TSSelect className="search-section__field_select" title="Location" />
                </Col>
                <Col span={6}>
                  <TSButton className="search-section__field_button" type="primary" height={50} borderRadius={4} width={185} >FIND JOB</TSButton>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </section>
    );
  }
}
