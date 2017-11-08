import React, { Component } from 'react';
import { Row, Col } from 'antd';
import TSButton from '../button';

import './feature-job-card.less';
import iconSalary from '../../assets/images/icon-lasary.svg';
import iconLocation from '../../assets/images/icon-location.svg';
import iconStart from '../../assets/images/icon-fj-star.svg';

export default class FeatureJobCard extends Component {
  render() {
    return (
      <div className="fj-card">
        <Row className="row">
          <Col span={6} >Company Image</Col>
          <Col span={18} >
            <Row>
              <Col span={16}>
                <ul>
                  <li>
                    <div className="title">Web Designer ( html)</div>
                  </li>
                  <li>
                    <div className="company">GKim Solution</div>
                  </li>
                  <li>
                    <div className="salary"> <img src={iconSalary} className="iconSalary" alt="Salary" />  1000$ - 2000$</div>
                  </li>
                  <li>
                    <div className="location"><img src={iconLocation} className="iconSalary" alt="Salary" /> Ho Chi Minh city</div>
                  </li>
                </ul>
              </Col>
              <Col span={8} >
                <div>
                  <img src={iconStart} className="image-star" alt="Salary" />
                  <TSButton width={92} height={25} type="green-border" borderRadius={4}>Apply</TSButton>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <div className="requires">
          <div className="skills">
            Requires: <span>UI, UX, Html, Css, Flash</span>
          </div>
        </div>
      </div>
    );
  }
}
