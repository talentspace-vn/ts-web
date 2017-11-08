import React, { PureComponent } from 'react';
import './top-company.less';

export default class TopCompanyCard extends PureComponent {
  render() {
    return (
      <div className="tc-card">
        <div className="top">
          <div className="company-logo" />
          <p className="company-name">Ho Chi Minh city</p>
        </div>
        <div className="bottom">
          <span className="count">5</span>
          <span className="status">Jobs Opening</span>
        </div>
      </div>
    );
  }
}
