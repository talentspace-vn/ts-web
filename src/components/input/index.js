import React, { PureComponent } from 'react'
import './input.less'
import { Input } from 'antd';


export default class TSInput extends PureComponent {
    render() {
        return (
            <div className={this.props.className}>
                <span className="title-name-input">{this.props.title}</span>
                <Input className="ts-input" ></Input>
            </div>
        )
    }
}