import React, { Component } from 'react';
import { Row, Col } from 'antd';

import './features-job.less';
import FeatureJobCard from '../../../../components/feature-job-card';

export default class FeatureJobSection extends Component {
  render() {
    return (
      <section className="fj-section">
        <div>
          <p className="fj-title">FEATURED JOBS</p>
          <div className="line" />
          <div className="fj-list">
            <Row className="fj-row">
              <Col span={10} offset={1}>
                <FeatureJobCard />
              </Col>
              <Col span={10} offset={1}>
                <FeatureJobCard />
              </Col>
            </Row>
            <Row>
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
