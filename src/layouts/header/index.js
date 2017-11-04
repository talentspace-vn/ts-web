import { RowProps } from 'antd/lib/grid/row';
import React from 'react'
import { Link } from 'react-router-dom'
import './header.less';
import { Row, Col } from 'antd';
import logo from '../../assets/images/logo-header.svg'
import Button from '../../components/button'
const Header = () => (
    <header className="header">

        <Row>
            <Col span={6}>
                <img src={logo} className="logo" alt="logo" />
            </Col>
            <Col span={12}>
                <ul>
                    <li><a>JOBS</a></li>
                    <li><a>CANDIDATES</a></li>
                    <li><a>EMPLOYERS</a></li>
                    <li><a>PRICING</a></li>
                    <li><a>CONTACT US</a></li>
                </ul>
            </Col>
            <Col span={6}>
                <Button >Sign In</Button>
                <Button type="primary"> Apply </Button>

            </Col>
        </Row>
    </header>
)

export default Header
