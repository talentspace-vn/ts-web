
import React from 'react';
import './home.less';
import SearchSection from './components/search-section';
import FeatureJobSection from './components/features-job-section'

class Home extends React.Component {
  render() {
    return (
      <div >
        <SearchSection />
        <FeatureJobSection />
      </div>
    );
  }
}


export default Home;
