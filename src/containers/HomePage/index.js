import React, { PureComponent } from 'react';
import { Row, Col } from 'antd';
import './index.less';
import SearchSection from './SearchSection';
import FeatureJobSection from './FeatureJobs';
import TopCompanies from './TopCompanies';
import ApplySection from './ApplySection';
import DeveloperSection from './DeveloperSection';

class HomePage extends PureComponent {
  render() {
    return (
      <div>
        <Row>
          <Col span={24}>
            <SearchSection />
            <TopCompanies />
            <ApplySection />
            <FeatureJobSection />
            <DeveloperSection />
          </Col>
        </Row>
      </div>
    );
  }
}

export default HomePage;
