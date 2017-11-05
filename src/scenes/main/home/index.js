import React from 'react'
import './home.less'
import SearchSection from './components/search-section'
class Home extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div >
        <SearchSection></SearchSection>
      </div>
    );
  }
}


export default Home
