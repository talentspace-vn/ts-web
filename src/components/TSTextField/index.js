import React, { PureComponent } from 'react';
import { Input, Icon } from 'antd';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './index.less';

class TSTextField extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      successMessage: null,

      errorMessage: null,

      isValid: false,

      value: props.defaultValue,
    };

    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }

  componentDidMount() {
    if (this.state.value !== null) {
      // this.validate
    }
  }

  onChange(e) {
    const value = e.target.value;
    this.setState({ value });

    if (this.props.onChange) {
      this.props.onChange(e, this.props.name);
    }
    if (!this.props.validateOnBlur) {
      this.validate(value);
    }
  }

  onBlur(e) {
    const value = e.target.value;
    if (this.props.validateOnBlur) {
      this.validate(value);
    }

    if (this.props.onBlur) {
      this.props.onBlur(e, this.props.name);
    }
  }

  onFocus(e) {
    if (this.props.onFocus) {
      this.prop.onFocus(e, this.props.name);
    }
  }

  validate(value) {
    // const errors = this.props.validator
  }

  render() {
    const { className, placeholder, prefix, type } = this.props; // , ...props 
    return (
      <Input
        type={type}
        prefix={prefix}
        placeholder={placeholder}
        className={classnames('ts-textfield', className)}
      //{...props}
      >
        {/* {children} */}
      </Input>
    );
  }
}

TSTextField.propTypes = {
  type: PropTypes.oneOf(['text', 'password']),
  name: PropTypes.string,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  prefix: PropTypes.instanceOf(<Icon></Icon>),
  successMessage: PropTypes.string,
  className: PropTypes.string
};

export default TSTextField;
