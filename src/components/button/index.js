import React, { Component } from 'react'
import PropTypes from 'prop-types';

import './index.less'
import classNames from 'classnames';

export default class TSButton extends Component {
    constructor() {
        super()
        
    }
    _btnClassNames() {
        var btnClass = classNames({
            'bt-primary': this.props.type === 'primary',
            'bt-outline': this.props.type === 'default',
        }, this.props.className)
        return btnClass
    }

    _btnStyles() {
        const buttonStyle = {
            color: `${this.props.color}`,
            height: `${this.props.height}px`,
            borderRadius: `${this.props.borderRadius}px`,
            width: `${this.props.width}px`

        }
        return buttonStyle
    }

    render() {
        
        
        return <button className={this._btnClassNames()} style={this._btnStyles()}> {this.props.children}</button>
    }
}



TSButton.propTypes = {
    height: PropTypes.number,
    borderRadius: PropTypes.number,
    color: PropTypes.string,
    width: PropTypes.number,
    type: PropTypes.string,
    className: PropTypes.string
  };

TSButton.defaultProps = {
    height: 32,
    borderRadius: 100,
    color: 'white',
    width: 116,
    type: 'default'
}