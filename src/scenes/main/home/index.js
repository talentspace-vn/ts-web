
import React from 'react';
import './home.less';
import SearchSection from './components/search-section';
import FeatureJobSection from './components/features-job-section';
import ApplySection from './components/apply-section';

class Home extends React.Component {
  render() {
    return (
      <div >
        <SearchSection />
        <FeatureJobSection />
        <ApplySection />
      </div>
    );
  }
}


export default Home;
