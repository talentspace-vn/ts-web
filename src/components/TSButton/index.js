import React, { Component } from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './index.less';

export default class TSButton extends Component {
  _generateClassname(className) {
    const btnClass = classNames('tsButton', {
      'tsButton--primary': this.props.type === 'primary',
      'tsButton--outline': this.props.type === 'default',
      'tsButton--green': this.props.type === 'green',
      'tsButton--green-border': this.props.type === 'green-border'
    }, className);
    return btnClass;
  }

  _generateStyles({ color, height, borderRadius }) {
    const buttonStyle = {
      color: `${color}`,
      height: `${height}px`,
      borderRadius: `${borderRadius}px`,
    };
    return buttonStyle;
  }

  render() {
    const { className, color, height, borderRadius, ...props } = this.props;
    return (
      <Button
        className={this._generateClassname(className)}
        style={this._generateStyles({ color, height, borderRadius })}
        {...props}
      >
        {this.props.children}
      </Button>
    );
  }
}


TSButton.propTypes = {
  height: PropTypes.number,
  borderRadius: PropTypes.number,
  color: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

TSButton.defaultProps = {
  height: 32,
  borderRadius: 100,
  color: '',
  type: 'default'
};
