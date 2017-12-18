import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import './index.less';
import TopCompaniesList from './components/TopCompaniesList';
import ShapeImage from '../../../assets/images/shape-1.svg';
import TSButton from '../../../components/TSButton';

class TopCompanies extends Component {
  render() {
    const companies = [
      { url: ShapeImage, companyName: 'Massimo Artemisis', jobs: 2 },
      { url: ShapeImage, companyName: 'Massimo Artemisis', jobs: 2 },
      { url: ShapeImage, companyName: 'Massimo Artemisis', jobs: 2 },
      { url: ShapeImage, companyName: 'Massimo Artemisis', jobs: 2 },
      { url: ShapeImage, companyName: 'Massimo Artemisis', jobs: 2 },
      { url: ShapeImage, companyName: 'Massimo Artemisis', jobs: 2 },
      { url: ShapeImage, companyName: 'Massimo Artemisis', jobs: 2 },
      { url: ShapeImage, companyName: 'Massimo Artemisis', jobs: 2 },
    ];
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
            <TopCompaniesList dataSource={companies} />
          </Col>
        </Row>
        <div className="ts-top-companies__btn-container">
          <TSButton className="ts-top-companies--btn-load-companies">Load All Companies</TSButton>
        </div>
      </div>
    );
  }
}

TopCompanies.propTypes = {

};

export default TopCompanies;
