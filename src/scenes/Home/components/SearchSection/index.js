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
        <section className="search-section_first-wrap">
        <Row>
          <Col span={20} offset={2}>
            <p className="search-section_title">MEET GREAT COMPANY<span>.</span> GET YOUR DREAM JOB<span>.</span></p>
          </Col>
        </Row>
        <Row >
          <Col span={18} offset={3}>
            <div className="search-section__field">
              <Row className="search-section__field__row" gutter={16}>
                <Col span={12} xs={24} sm={8} md={10} lg={12} xl={10}>
                  <TSInput
                    className="search-section__field__inputContainer"
                    inputClass="search-section__field__input"
                    title="Keyword"
                  />
                </Col>
                <Col span={6} xs={24} sm={6} md={6} lg={6} xl={8}>
                  <TSSelect className="search-section__field__select" title="Location" />
                </Col>
                <Col span={6} xs={24} sm={10} md={8} lg={6} xl={4}>
                  <TSButton className="search-section__field__button" type="primary" height={50} borderRadius={4} >FIND JOB</TSButton>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        </section>
      </section>
    );
  }
}
