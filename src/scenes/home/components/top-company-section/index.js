import React, { Component } from 'react';
import { Row, Col } from 'antd';
import TopCompanyCard from '../../../../components/TSCompanyCard';
import './top-company.less';

export default class TopCompanySection extends Component {
  render() {
    return (
      <section className="tc-section">
        <div>
          <p className="tc-section_title">TOP COMPANIES</p>
          <div className="tc-section_line" />
          <div className="tc-section__tc-list">
            <Row className="tc-section__list__row">
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
