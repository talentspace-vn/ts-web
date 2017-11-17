
import React from 'react';
import { BackTop } from 'antd';

import './home.less';
import SearchSection from './components/search-section';
import FeatureJobSection from './components/features-job-section';
import ApplySection from './components/apply-section';
import TopCompanySection from './components/top-company-section';
import DeveloperSection from './components/developer-section';

class Home extends React.Component {
  render() {
    return (
      <div >
        <BackTop />
        <SearchSection />
        <FeatureJobSection />
        <ApplySection />
        <TopCompanySection />
        <DeveloperSection />
      </div>
    );
  }
}


export default Home;
