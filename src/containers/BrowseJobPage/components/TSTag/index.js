import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Tag } from 'antd';
import './index.less';

const TSTag = ({ className, value, ...rest }) => (
  <Tag className={classnames('ts-tag', className)} {...rest}>
    {value}
  </Tag>
);

TSTag.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string
};

export default TSTag;
