import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Card, Row, Col } from 'antd';
import classnames from 'classnames';
import './index.less';
import TSButton from '../../components/TSButton';
import IconMaker from '../../assets/images/icon-map-maker.svg';
import IconLove from '../../assets/images/icon-love.svg';

class TSFeatureJobCard extends PureComponent {
  render() {
    const { className, ...props } = this.props;

    return (
      <Card hoverable {...props} className={classnames('ts-feature-job-card', 'ts-feature-job-card--border-top', className)}>
        <Row>
          <Col span={12} className="ts-feature-job-card__detail">
            <div className="ts-feature-job-card__detail__position">Web Designer / Developer</div>
            <div className="ts-feature-job-card__detail__name">Massimo Artemisis</div>
          </Col>
          <Col span={8} className="ts-feature-job-card__address">
            <img className="ts-feature-job-card__icon" src={IconMaker} />
            <div className="ts-feature-job-card__address__name">Sacramento, California</div>
          </Col>
          <Col span={4}>
            <img className="ts-feature-job-card__icon" src={IconLove} />
            <TSButton className="ts-feature-job-card__btn-feature-job ts-feature-job-card__btn-feature-job--fulltime">Full Time</TSButton>
          </Col>
        </Row>
      </Card>
    );
  }
}

TSFeatureJobCard.propTypes = {
  className: PropTypes.string
};

export default TSFeatureJobCard;
