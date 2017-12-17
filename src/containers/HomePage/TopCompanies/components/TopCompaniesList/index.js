import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import CompaniesCard from '../CompaniesCard';

class TopCompaniesList extends Component {
  render() {
    return (
      <Row className="top-companies-list">
        {this.props.dataSource.map((data, index) => (
          <Col key={index} span={6}>
            <CompaniesCard data={data} />
          </Col>
        ))}

      </Row>
    );
  }
}

TopCompaniesList.propTypes = {
  dataSource: PropTypes.array.isRequired

};

export default TopCompaniesList;
