import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './index.less';

export default class TSButton extends Component {
  _btnClassNames() {
    const btnClass = classNames({
      'bt-primary': this.props.type === 'primary',
      'bt-outline': this.props.type === 'default',
      'bt-green': this.props.type === 'green',
      'bt-green-border': this.props.type === 'green-border',
      'bt-bg-white': this.props.type === 'background-white'
    }, this.props.className);
    return btnClass;
  }

  _btnStyles() {
    const buttonStyle = {
      color: `${this.props.color}`,
      height: `${this.props.height}px`,
      borderRadius: `${this.props.borderRadius}px`,
      width: `${this.props.width}px`

    };
    return buttonStyle;
  }

  render() {
    return (<button className={this._btnClassNames()} style={this._btnStyles()}>
      {this.props.children}
    </button>);
  }
}


TSButton.propTypes = {
  height: PropTypes.number,
  borderRadius: PropTypes.number,
  color: PropTypes.string,
  width: PropTypes.number,
  type: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

TSButton.defaultProps = {
  height: 32,
  borderRadius: 100,
  color: '',
  width: 116,
  type: 'default'
};
