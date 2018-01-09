import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './index.less';
import TSFeatureJobCard from '../../../../../components/TSFeatureJobCard';

class TSFeatureJobList extends PureComponent {
  render() {
    return (
      <div className="feature-job-list">
        {this.props.dataSource.map((job, index) => (
          <TSFeatureJobCard key={index} data={job} />
        ))}
      </div>
    );
  }
}

TSFeatureJobList.propTypes = {
  dataSource: PropTypes.array.isRequired
};

export default TSFeatureJobList;
