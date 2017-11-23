import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './features-job.less';
import FeatureJobCard from '../../../../components/TSJobCard';

export default class FeatureJobSection extends Component {
  render() {
    return (
      <section className="fj-section">
        <div className="fj-section__wrap">
          <p className="fj-section__title">FEATURED JOBS</p>
          <div className="fj-section__line" />
          <div className="fj-section__list">
            <Row className="fj-section__list__row" gutter={48}>
              <Col span={10} xs={20} sm={20} md={20} lg={12} xl={12}>
                <FeatureJobCard />
              </Col>
              <Col span={10} xs={20} sm={20} md={20} lg={12} xl={12}>
                <FeatureJobCard />
              </Col>
            </Row>
          </div>
        </div>
      </section>
    );
  }
}
