import React, { PureComponent } from 'react';
import { Row, Col } from 'antd';
import TSButton from '../../../../../components/button';
import './apply-section.less';

export default class ApplySection extends PureComponent {
  render() {
    return (
      <section className="apl-sec">
        <Row>
          <Col span={12}>
            <div className="employer">
              <p className="title">I'M AN EMPLOYER</p>
              <p className="description"> Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus</p>
              <TSButton borderRadius={4} width={169} color="#e94347" type="background-white">Apply</TSButton>
            </div>

          </Col>
          <Col span={12}>
            <div className="candidate">
              <p className="title">I'M AN CANDIDATE</p>
              <p className="description"> Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus</p>
              <TSButton borderRadius={4} width={169} color="#10223f" type="background-white">Apply</TSButton>
            </div>

          </Col>
        </Row>
      </section>
    );
  }
}
