import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import './index.less';
import TSFeatureJobList from './component/TSFeatureJobList';

class FeatureJobSection extends Component {
  render() {
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
            <TSFeatureJobList />
          </Col>
        </Row>
      </div>
    );
  }
}

FeatureJobSection.propTypes = {

};

export default FeatureJobSection;
