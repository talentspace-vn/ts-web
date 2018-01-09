import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import './index.less';
import TSFeatureJobList from './component/TSFeatureJobList';
import TSButton from '../../../components/TSButton';

class FeatureJobSection extends Component {
  render() {
    const jobList = [
      { position: 'Web Designer / Developer', companyName: 'Massimo Artemisis', address: 'Sacramento, California', jobType: 'FULL TIME' },
      { position: 'Marketing Director', companyName: 'Tix Dog', address: 'Rennes, France', jobType: 'PART TIME' },
      { position: 'C Developer (Senior) C .Net', companyName: 'StarHealth', address: 'London, United Kingdom', jobType: 'FULL TIME' },
      { position: 'Application Developer For Android', companyName: 'Altes Bank', address: 'Istanbul, Turkey', jobType: 'FREELANCE' },
      { position: 'Regional Sales Manager South east Asia', companyName: 'Vincent', address: 'Ajax, Ontario', jobType: 'TEMPORARY' },
      { position: 'Social Media and Public Relation Executive ', companyName: 'MediaLab', address: 'Ankara / Turkey', jobType: 'FULL TIME' },
    ];
    return (
      <div className="ts-featureJob-section">
        <Row className="ts-featureJob-section__header-container">
          <Col span={24}>
            <p className="ts-featureJob-section__header-container__header">Featured Jobs</p>
            <p className="ts-featureJob-section__header-container__description">Leading Employers already using job and talent.</p>
          </Col>
        </Row>
        <Row>
          <Col span={18} offset={3}>
            <TSFeatureJobList dataSource={jobList} />
          </Col>
        </Row>
        <div className="ts-featureJob-section__btn-container">
          <TSButton className="ts-featureJob-section--btn-loadmore">Load more listings</TSButton>
        </div>
      </div>
    );
  }
}

FeatureJobSection.propTypes = {

};

export default FeatureJobSection;
