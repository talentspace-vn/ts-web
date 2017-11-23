import React, { PureComponent } from 'react';
import { Input } from 'antd';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './input.less';

export default class TSInput extends PureComponent {
  render() {
    const { title, className, inputClass, type, ...props } = this.props;
    return (
      <div className={classnames('tsInput__container', className)}>
        <div className="tsInput__title">
          {title}
        </div>
        <Input type={type} className={classnames('tsInput', inputClass)} {...props} />
      </div>
    );
  }
}

TSInput.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  inputClass: PropTypes.string,
  type: PropTypes.string
};

TSInput.defaultProps = {
  type: 'text'
};
