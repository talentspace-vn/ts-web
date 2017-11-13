import React, { PureComponent } from 'react';
import './top-company.less';

export default class TopCompanyCard extends PureComponent {
  render() {
    return (
      <div className="tc-card">
        <div className="tc-card__top">
          <div className="tc-card__top__logo" />
          <p className="tc-card__top__name">Ho Chi Minh city</p>
        </div>
        <div className="tc-card__bottom">
          <span className="tc-card__bottom__count">5</span>
          <span className="tc-card__bottom__status">Jobs Opening</span>
        </div>
      </div>
    );
  }
}
