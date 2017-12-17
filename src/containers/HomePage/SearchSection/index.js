import React, { PureComponent } from 'react';
import { Col, Row, Icon } from 'antd';
import './index.less';
import TSInput from '../../../components/TSInput';
import TSButton from '../../../components/TSButton';
import TSAutocomplete from '../../../components/TSAutocomplete';
import keyboardIcon from '../../../assets/images/keyboard_ico.svg';

class SearchSection extends PureComponent {
  render() {
    const dataSource = ['TP.Hồ Chí Minh', 'Hà Nội', 'Hải Phòng'];
    return (
      <Row className="ts-search-section" type="flex" justify="center" align="middle">
        <Col span={24}>
          <div className="ts-search-section__slogan">
            The Easiest Way to Get Your New Job
          </div>
        </Col>
        <Col span={24}>
          <p className="ts-search-section__sub-slogan">
            Find Jobs, Employment & Career Opportunities
          </p>
        </Col>
        <Col span={15}>
          <Row gutter={16} type="flex" justify="center">
            <Col span={14}>
              <TSInput imageSrc={keyboardIcon} />
            </Col>
            <Col span={8}>
              <TSAutocomplete dataSource={dataSource} />
            </Col>
            <Col span={2}>
              <TSButton className="ts-search-section__btnSearch">
                <Icon
                  className="ts-search-section__btnSearch__icon"
                  type="search"
                />
              </TSButton>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default SearchSection;
