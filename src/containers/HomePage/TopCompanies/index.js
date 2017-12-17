import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import './index.less';
import TopCompaniesList from './components/TopCompaniesList';

class TopCompanies extends Component {
  render() {
    return (
      <div className="ts-top-companies">
        <Row className="ts-top-companies__header-container">
          <Col span={24}>
            <p className="ts-top-companies__header-container__header">Top Companies</p>
            <p className="ts-top-companies__header-container__description">37 jobs live - 0 added today.</p>
          </Col>
        </Row>
        <Row>
          <Col span={18} offset={3}>
            <TopCompaniesList />
          </Col>
        </Row>
      </div>
    );
  }
}

TopCompanies.propTypes = {

};

export default TopCompanies;
