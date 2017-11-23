import React, { PureComponent } from 'react';
import { Row, Col } from 'antd';
import './apply-section.less';
import TSButton from '../../../../components/TSButton';

export default class ApplySection extends PureComponent {
  render() {
    return (
      <section className="apply-section">
        <Row>
          <Col xs={24} sm={24} md={12} lg={12} xl={12} >
            <div className="apply-section__employer">
              <p className="title">I AM AN EMPLOYER</p>
              <p className="description"> Apply to able to post new job offers, searching for  talented candidates.</p>
              <TSButton borderRadius={4} width={169} color="#e94347" type="background-white">Apply</TSButton>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <div className="apply-section__candidate">
              <p className="title">I AM AN CANDIDATE</p>
              <p className="description">Apply to able to post your awsome CV and searching great companies.</p>
              <TSButton borderRadius={4} width={169} color="#10223f" type="background-white">Apply</TSButton>
            </div>
          </Col>
        </Row>
      </section>
    );
  }
}
