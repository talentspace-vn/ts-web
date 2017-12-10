import React, { PureComponent } from 'react';
import { AutoComplete } from 'antd';
import PropTypes from 'prop-types';
import './index.less';

const dataSource = ['TP.Hồ Chí Minh', 'Hà Nội', 'Hải Phòng'];


class TSAutocomplete extends PureComponent {
  render() {
    const { className, children, ...props } = this.props;
    return (
      <AutoComplete
        className="ts-autocomplete"
        size="large"
        dataSource={dataSource}
        placeholder="City, province or region"
        filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
        {...props}
      />
    );
  }
}

TSAutocomplete.propTypes = {

};

export default TSAutocomplete;
