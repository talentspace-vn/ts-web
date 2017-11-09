import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './features-job.less';
import FeatureJobCard from '../../../../components/TSJobCard';

export default class FeatureJobSection extends Component {
  render() {
    return (
      <section className="fj-section">
        <div>
          <p className="fj-section_title">FEATURED JOBS</p>
          <div className="fj-section_line" />
          <div className="fj-section__list">
            <Row className="fj-section__list__row">
              <Col span={10} offset={1}>
                <FeatureJobCard />
              </Col>
              <Col span={10} offset={1}>
                <FeatureJobCard />
              </Col>
            </Row>
          </div>
        </div>
      </section>
    );
  }
}
