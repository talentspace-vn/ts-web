import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './index.less';
import TSFeatureJobCard from '../../../../../components/TSFeatureJobCard';

class TSFeatureJobList extends PureComponent {
  render() {
    return (
      <div className="feature-job-list">
        <TSFeatureJobCard />
        <TSFeatureJobCard />
      </div>
    );
  }
}

TSFeatureJobList.propTypes = {

};

export default TSFeatureJobList;
