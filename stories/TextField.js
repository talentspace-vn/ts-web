import React from 'react';
import { Icon } from 'antd';
import { storiesOf } from '@storybook/react';
import TSTextField from '../src/components/TSTextField';


storiesOf('TextField', module)
  .add('username', () => (
    <TSTextField placeholder="Enter your username" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} type="text" />
  ));
