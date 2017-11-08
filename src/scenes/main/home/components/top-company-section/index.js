import React, { Component } from 'react';
import { Row, Col } from 'antd';
import TopCompanyCard from '../../../../../components/top-company-card';
import './top-company.less';

export default class TopCompanySection extends Component {
  render() {
    return (
      <section className="tc-section">
        <div>
          <p className="tc-title">TOP COMPANIES</p>
          <div className="line" />
          <div className="tc-list">
            <Row className="tc-row">
              <Col span={10} offset={1}>
                <TopCompanyCard />
              </Col>
            </Row>
          </div>
        </div>
      </section>
    );
  }
}
