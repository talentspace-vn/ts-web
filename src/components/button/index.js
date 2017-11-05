import React, { Component } from 'react'
import './index.less'
import classNames from 'classnames';

export default class Button extends Component {
    constructor() {
        super()
    }

    render() {
        const buttonStyle = {
            color: `${this.props.color}`,
            height: `${this.props.height}px`,
            borderRadius: `${this.props.borderRadius}px`,

        };
        var btnClass = classNames({
            'bt-primary': this.props.type === 'primary',
            'bt-outline': this.props.type === 'default',
        });
        return <button className={btnClass} style={buttonStyle}> {this.props.children}</button>
    }
}



Button.defaultProps = {
    height: '32',
    borderRadius: '100',
    color: 'white',
    type: 'default'
}