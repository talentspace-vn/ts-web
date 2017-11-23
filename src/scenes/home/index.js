
import React from 'react';
import { BackTop } from 'antd';

import './home.less';
import SearchSection from './components/SearchSection';
import FeatureJobSection from './components/FeaturesJobSection';
import ApplySection from './components/ApplySection';
import TopCompanySection from './components/TopCompanySection';
import DeveloperSection from './components/DeveloperSection';

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
