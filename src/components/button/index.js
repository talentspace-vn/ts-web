import React, { Component } from 'react'
import './index.less'
import classNames from 'classnames';

export default class TSButton extends Component {
    constructor() {
        super()
    }

    render() {
        var cn = this.props.className
        const buttonStyle = {
            color: `${this.props.color}`,
            height: `${this.props.height}px`,
            borderRadius: `${this.props.borderRadius}px`,
            width: `${this.props.width}px`

        };
        var btnClass = classNames({
            'bt-primary': this.props.type === 'primary',
            'bt-outline': this.props.type === 'default',
        }, this.props.className);
        return <button className={btnClass} style={buttonStyle}> {this.props.children}</button>
    }
}



TSButton.defaultProps = {
    height: '32',
    borderRadius: '100',
    color: 'white',
    width: '116',
    type: 'default'
}