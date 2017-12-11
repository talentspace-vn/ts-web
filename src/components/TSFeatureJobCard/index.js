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
    const {position, companyName, address, jobType} = this.props.data;
    const _handleJobTypeClass = () => {
        switch (jobType) {
          case "PART TIME":
            return "ts-feature-job-card__btn-feature-job--parttime ";
          case "FREELANCE":
            return "ts-feature-job-card__btn-feature-job--freelance";
          default:
            return "ts-feature-job-card__btn-feature-job--fulltime";
        }
    }
    return (
      <Card hoverable {...props} className={classnames('ts-feature-job-card', 'ts-feature-job-card--border-top', className)}>
        <Row>
          <Col span={12} className="ts-feature-job-card__detail">
            <div className="ts-feature-job-card__detail__position">{position}</div>
            <div className="ts-feature-job-card__detail__name">{companyName}</div>
          </Col>
          <Col span={6} className="ts-feature-job-card__address">
            <img className="ts-feature-job-card__icon" src={IconMaker} />
            <div className="ts-feature-job-card__address__name">{address}</div>
          </Col>
          <Col span={6}>
            <img className="ts-feature-job-card__icon" src={IconLove} />
            <TSButton className= {classnames("ts-feature-job-card__btn-feature-job ", _handleJobTypeClass())} >{jobType}</TSButton>
          </Col>
        </Row>
      </Card>
    );
  }
}

TSFeatureJobCard.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object.isRequired
};

export default TSFeatureJobCard;
