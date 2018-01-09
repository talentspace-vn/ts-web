import React, { PureComponent } from 'react';
import './index.less';
import TSButton from '../../../components/TSButton';

class ApplySection extends PureComponent {
  render() {
    return (
      <div className="apply-section">
        <div className="apply-section__title">Make a Difference with Your Online Resume!</div>
        <div className="apply-section__description">Your resume in minutes with JobHunt resume assistant is ready!</div>
        <TSButton className="apply-section__btn-apply">Apply</TSButton>
      </div>
    );
  }
}

export default ApplySection;
