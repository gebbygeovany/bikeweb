import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { TabBar } from '../components/Tabbar'
import { SidebarHome } from '../components/Sidebar'
import styled from 'styled-components'

const Styles = styled.div`

`;

export const Home = () => (
    <Styles>
        <Row>
            <Col sm={3}>
                <SidebarHome />
            </Col>
            <Col sm={9}>
                <TabBar />
            </Col>
        </Row>
    </Styles>
)