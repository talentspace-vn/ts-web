import React, { PureComponent } from 'react';
import { AutoComplete } from 'antd';
import PropTypes from 'prop-types';
import './index.less';




class TSAutocomplete extends PureComponent {
  render() {
    const { className, children, ...props } = this.props;
    return (
      <AutoComplete
        className="ts-autocomplete"
        size="large"
        dataSource={this.props.dataSource}
        placeholder="City, province or region"
        filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
        {...props}
      />
    );
  }
}

TSAutocomplete.propTypes = {
    dataSource: PropTypes.array.isRequired
};

export default TSAutocomplete;
