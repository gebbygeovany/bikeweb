import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { CardColumn } from '../components/CardColumn'
import { SidebarExplore } from '../components/Sidebar'
import styled from 'styled-components'

const Styles = styled.div`

`;

export const Explore = () => (
    <Styles>
        <Row>
            <Col sm={3}>
                <SidebarExplore />
            </Col>
            <Col sm={9}>
                <CardColumn />
            </Col>
        </Row>
    </Styles>
)