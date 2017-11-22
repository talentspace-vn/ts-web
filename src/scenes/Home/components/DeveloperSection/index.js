import React, { Component } from 'react';
import { Carousel } from 'antd';
import TSDeveloperCard from '../../../../components/TSDeveloperCard';
import './developer.less';

export default class DeveloperSection extends Component {
  render() {
    return (
      <section className="dev-section" >
        <Carousel autoplay>
          <div>
            <TSDeveloperCard />
          </div>
          <div>
            <TSDeveloperCard />
          </div>
        </Carousel>

      </section>
    );
  }
}
