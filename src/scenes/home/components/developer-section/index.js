import React, { Component } from 'react';
import { Row, Col, Avatar } from 'antd';

import './developer.less';

export default class DeveloperSection extends Component {
  render() {
    return (
      <section className="dev-section" >
        <Row>
          <Col span={8} />
          <Col span={16}>
            <Row>
              <Col span={24}>
                <Col span={20}>
                  <div className="dev-section__container-description">
                    <p className="dev-section__container-description_quote"> “Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus”</p>
                    <p className="dev-section__container-description_name">Giap Vo,</p>
                    <p className="dev-section__container-description_postion">iOS Developer</p>
                  </div>
                </Col>
              </Col>
              <Col span={24}>
                <Col span={22}>
                  <div className="dev-section__list-developer">
                    <Avatar className="dev-section__list-developer_item" size="large" style={{ backgroundColor: '#87d068' }} icon="user" />
                  </div>
                </Col>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
    );
  }
}
