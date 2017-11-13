import React, { PureComponent } from 'react';
import { Input } from 'antd';
import PropTypes from 'prop-types';

import './input.less';

export default class TSInput extends PureComponent {
  render() {
    return (
      <div className={this.props.className}>
        <span className="title-name-input">{this.props.title}</span>
        <Input className="ts-input" />
      </div>
    );
  }
}

TSInput.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};
