import React, { PureComponent } from 'react';
import { Row, Col } from 'antd';
import './index.less';
import SearchSection from './SearchSection';
import FeatureJobSection from './FeatureJobs';

class HomePage extends PureComponent {
  render() {
    return (
      <div>
        <Row>
          <Col span={24}>
            <SearchSection />
            <FeatureJobSection />
          </Col>
        </Row>
      </div>
    );
  }
}

export default HomePage;
