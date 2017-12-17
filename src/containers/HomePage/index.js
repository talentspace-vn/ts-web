import React, { PureComponent } from 'react';
import { Row, Col } from 'antd';
import './index.less';
import SearchSection from './SearchSection';
import FeatureJobSection from './FeatureJobs';
import TopCompanies from './TopCompanies';

class HomePage extends PureComponent {
  render() {
    return (
      <div className="App">
        <Row>
          <Col span={24}>
            <SearchSection />
            <TopCompanies />
            <FeatureJobSection />
          </Col>
        </Row>
      </div>
    );
  }
}

export default HomePage;
