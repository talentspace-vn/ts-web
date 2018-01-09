import React, { Component } from 'react';
import { Row, Col, Collapse, Radio, Checkbox, Slider, Divider } from 'antd';
import './index.less';
import TSJobRow from './components/TSJobRow';
import TSTag from './components/TSTag';
import SAMPLE_JOBS from './sample_data.json';

const { Panel } = Collapse;
const RadioGroup = Radio.Group;
const CheckboxGroup = Checkbox.Group;

/**
 * This is fake data for filters
 * TODO: Fetch filter data from API
 */
const SAMPLE_DATE_FILTERS = [
  {
    value: 'all',
    label: 'All'
  },
  {
    value: '1h',
    label: 'Last hour'
  },
  {
    value: '1d',
    label: 'Last 24 hours'
  },
  {
    value: '1w',
    label: 'Last 7 days'
  },
  {
    value: '1m',
    label: 'Last 30 days'
  }
];

const SAMPLE_COMPANY_FILTERS = [
  {
    value: 'google',
    label: 'Google'
  },
  {
    value: 'facebook',
    label: 'Facebook'
  },
  {
    value: 'airbnb',
    label: 'AirBnB'
  },
  {
    value: 'zalora',
    label: 'Zalora'
  }
];

const SAMPLE_SKILL_FILTERS = [
  {
    value: 'nodejs',
    label: 'NodeJs'
  },
  {
    value: 'js',
    label: 'JavaScript'
  },
  {
    value: 'java',
    label: 'Java'
  }
];

const SAMPLE_SALARY_RANGE = {
  100: '$100',
  700: '$700',
  1000: '$1000'
};

const SAMPLE_FILTER_TAGS = [
  'NodeJS',
  'JavaScript ASGDHJAGSHJGJHDS',
  'Python',
  'Ho Chi Minh',
  'Ha Noi'
];

class BrowseJobPage extends Component {
  render() {
    return (
      <Row className="browsejob-page">
        <Col span={6} className="browsejob-page__filters">
          <Collapse defaultActiveKey={['1', '2', '3', '4']}>
            <Panel header="Date Posted" key="1">
              <RadioGroup className="browsejob-page__filters__radio-group">
                {SAMPLE_DATE_FILTERS.map(item => (
                  <Radio key={item.value} value={item.value}>
                    {item.label}
                  </Radio>
                ))}
              </RadioGroup>
            </Panel>
            <Panel header="Company" key="2">
              <CheckboxGroup
                className="browsejob-page__filters__checkbox-group"
                options={SAMPLE_COMPANY_FILTERS}
              />
            </Panel>
            <Panel header="Skills" key="3">
              <CheckboxGroup
                className="browsejob-page__filters__checkbox-group"
                options={SAMPLE_SKILL_FILTERS}
              />
            </Panel>
            <Panel header="Salary Range" key="4">
              <Slider
                range
                max={1000}
                min={100}
                marks={SAMPLE_SALARY_RANGE}
                defaultValue={[700, 1000]}
              />
            </Panel>
          </Collapse>
        </Col>
        <Col span={1}>
          <Divider type="vertical" className="browsejob-page__divider" />
        </Col>
        <Col span={17}>
          <Row className="browsejob-page__active-filters">
            {SAMPLE_FILTER_TAGS.map((tag, index) => (
              <TSTag value={tag} key={tag} closable />
            ))}
          </Row>
          <Row className="browsejob-page__status">
            <div>{SAMPLE_JOBS.length} Jobs</div>
          </Row>
          <Row className="browsejob-page__job-list">
            {SAMPLE_JOBS.map(job => <TSJobRow key={job.title} data={job} />)}
          </Row>
        </Col>
      </Row>
    );
  }
}

export default BrowseJobPage;
