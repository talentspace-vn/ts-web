import React, { Component } from 'react'
import './select.less'
import { Select } from 'antd';

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
        )
    }
}