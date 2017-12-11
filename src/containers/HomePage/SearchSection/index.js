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
      <div className="ts-search-section">
        <Row>
          <Col span={24}>
            <div className="ts-search-section__slogan">The Easiest Way to Get Your New Job</div>
            <p className="ts-search-section__sub-slogan">Find Jobs, Employment & Career Opportunities</p>
          </Col>
        </Row>
        <Row>
          <Col span={14} offset={5}>
            <Row gutter={16}>
              <Col span={14}>
                <TSInput imageSrc={keyboardIcon} />
              </Col>
              <Col span={8}>
                <TSAutocomplete dataSource={dataSource} />
              </Col>
              <Col span={2}>
                <TSButton className="ts-search-section__btnSearch">
                  <Icon className="ts-search-section__btnSearch__icon" type="search" />
                </TSButton>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default SearchSection;

