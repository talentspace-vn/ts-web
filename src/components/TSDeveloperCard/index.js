import React, { PureComponent } from 'react';
import { Row, Col, Avatar } from 'antd';
import './index.less';

export default class TSDeveloperCard extends PureComponent {
  render() {
    return (
      <Row className="ts-dev-card">
        <Col offset={4} span={20}>
          <Row>
            <Col span={24}>
              <Col span={20}>
                <div className="ts-dev-card__container-description">
                  <p className="ts-dev-card__container-description__quote"> “Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus”</p>
                </div>
                <Avatar className="ts-dev-card__avatar" size="large" style={{ backgroundColor: '#87d068' }} icon="user" />
                <p className="ts-dev-card__container-description__name">Giap Vo,</p>
                <p className="ts-dev-card__container-description__postion">iOS Developer</p>
              </Col>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
