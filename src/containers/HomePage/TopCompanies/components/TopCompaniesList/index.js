import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Card } from 'antd';

class TopCompaniesList extends Component {
  render() {
    const gridStyle = {
      width: '25%',
      textAlign: 'center',
      border: 'none'
    };
    return (
      <Row className="top-companies-list">
        <Col span={6}>
          <Card className="top-companies-list__item" hoverable>
            YTr
          </Card>
        </Col>
      </Row>
    );
  }
}

TopCompaniesList.propTypes = {

};

export default TopCompaniesList;
