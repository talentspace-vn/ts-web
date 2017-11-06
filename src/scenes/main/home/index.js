import React from 'react'
import './home.less'
import SearchSection from './components/search-section'
import FeatureJobSection from './components/features-job-section'
class Home extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div >
        <SearchSection></SearchSection>
        <FeatureJobSection></FeatureJobSection>
      </div>
    );
  }
}


export default Home
