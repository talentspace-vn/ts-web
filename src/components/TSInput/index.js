import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import './index.less';

class TSInput extends Component {
  render() {
    return (
      <div className="ts-input">
        <Input className="ts-input--padding" placeholder="Job title, keywords or company name" size="large" />
        <img className="ts-input__image" src={this.props.imageSrc}  />
      </div>
    );
  }
}

TSInput.PropTypes = {
  imageSrc: PropTypes.string
};

export default TSInput;
