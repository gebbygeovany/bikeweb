import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { AccorDion } from '../components/Accordion'
import { SidebarFAQ } from '../components/Sidebar'
import styled from 'styled-components'

const Styles = styled.div`

`;

export const FAQ = () => (
    <Styles>
        <Row>
            <Col sm={3}>
                <SidebarFAQ />
            </Col>
            <Col sm={9}>
                <AccorDion />
            </Col>
        </Row>
    </Styles>
)