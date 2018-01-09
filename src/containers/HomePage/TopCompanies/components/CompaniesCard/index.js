import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Card } from 'antd';
import './index.less';

class CompaniesCard extends Component {
  render() {
    var {url, companyName, jobs} = this.props.data
    return (
      <Card className="companies-card" hoverable>
        <img className="companies-card__image" src={url} />
        <div className="companies-card__company-name">{companyName}</div>
        <div className="companies-card__company-jobs">({jobs} open positions)</div>
      </Card>
    );
  }
}

CompaniesCard.propTypes = {
    data: PropTypes.object.isRequired  
};

export default CompaniesCard;
