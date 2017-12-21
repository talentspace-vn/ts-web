import React, { Component } from 'react';
import { Row, Col, Carousel } from 'antd';
import './index.less';


class DeveloperSection extends Component {
  render() {
    return (
      <div className="developer-section">
        <Row>
          <Col>
            <div className="developer-section__title">Kind Words From Happy Candidates</div>
            <div className="developer-section__subTitle">What other people thought about the service provided by TS</div>
          </Col>
        </Row>
        <Row>
          <Col span={16} offset={4} >
            <Carousel className="developer-section__carousel" autoplay>
              <div className="developer-section__carousel__item"><h3>1</h3></div>
              <div className="developer-section__carousel__item"><h3>2</h3></div>
              <div className="developer-section__carousel__item"><h3>3</h3></div>
              <div className="developer-section__carousel__item"><h3>4</h3></div>
            </Carousel>
          </Col>
        </Row>
      </div>
    );
  }
}

export default DeveloperSection;
