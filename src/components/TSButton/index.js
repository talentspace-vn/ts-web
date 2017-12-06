import React, { PureComponent } from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './index.less';

class TSButton extends PureComponent {
  render() {
    const { className, children, ...props } = this.props;
    return (
      <Button
        className={classnames('ts-button', className)}
        {...props}
      >
        {children}
      </Button>
    );
  }
}

TSButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default TSButton;
