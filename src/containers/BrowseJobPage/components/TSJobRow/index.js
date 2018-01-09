import React from 'react';
import { Row, Card, Col, Icon } from 'antd';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import moment from 'moment';
import TSTag from '../TSTag';
import './index.less';

const TSJobRow = ({ className, data }) => {
  return (
    <Card hoverable className={classnames('ts-job-row', className)}>
      <Row type="flex" align="middle">
        <Col span={3}>
          <img
            alt="Company Logo"
            className="ts-job-row__company-logo"
            src={data.company_logo}
          />
        </Col>
        <Col span={17}>
          <div className="ts-job-row__title">{data.job_title}</div>
          <div className="ts-job-row__company-name">{data.company_name}</div>
          <div className="ts-job-row__location">
            <Icon type="environment-o" />
            <span>{data.job_location}</span>
          </div>
        </Col>
        <Col span={4} style={{ textAlign: 'right' }}>
          <Icon type="star-o" className="ts-job-row__btn-favorite" />
          <div className="ts-job-row__compensation">{data.compensation}</div>
          <div className="ts-job-row__date">
            {moment(data.posted_date).fromNow()}
          </div>
        </Col>
      </Row>
      <Row className="ts-job-row__skills">
        {data.required_skills.map((skill, index) => (
          <TSTag key={skill} value={skill} />
        ))}
      </Row>
    </Card>
  );
};

TSJobRow.propTypes = {
  className: PropTypes.string,
  data: PropTypes.shape({
    company_logo: PropTypes.string,
    company_name: PropTypes.string,
    job_title: PropTypes.string,
    job_location: PropTypes.string,
    compensation: PropTypes.string,
    posted_date: PropTypes.string,
    required_skills: PropTypes.array
  })
};

export default TSJobRow;
