import React, { Component } from 'react'
import './index.less'
export default class Button extends Component {
    constructor() {
        super()
        this.classButton = this.classButton.bind(this)
    }
    classButton() {
        return this.props.type === 'primary' ? "bt-primary" : "bt-outline";
    }
    render() {
        const buttonStyle = {
            color: `${this.props.color}`,
            height: `${this.props.height}px`,
            borderRadius: `${this.props.borderRadius}px`,

        };
        return <button className={this.classButton()} style={buttonStyle}> {this.props.children}</button>
    }
}



Button.defaultProps = {
    height: '32',
    borderRadius: '100',
    color: 'white',
    type: 'default'
}