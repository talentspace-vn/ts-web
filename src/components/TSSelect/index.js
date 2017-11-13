import React, { Component } from 'react';
import { Select } from 'antd';
import PropTypes from 'prop-types';

import './select.less';

const Option = Select.Option;

export default class TSSelect extends Component {
    handleChange = (value) => {
      console.log(`selected ${value}`);
    }
    render() {
      return (
        <div className={this.props.className}>
          <span className="title-name-select">{this.props.title}</span>
          <Select className="customSelect" defaultValue="HCM" size="default" onChange={this.handleChange}>
            <Option value="HCM">Hồ Chí Minh</Option>
            <Option value="HN">Hà Nội</Option>
            <Option value="DN">Đà Nẵng</Option>
          </Select>
        </div>
      );
    }
}

TSSelect.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};
