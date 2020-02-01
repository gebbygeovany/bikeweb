import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .tabs {
        display: flex;
        justify-content: center;
        flex-direction: row;
        text-align: center;
    }
`;

export const TabBar = () => (
    <Styles>
        <br></br>
        <Tabs defaultActiveKey={1}>
            <Tab eventKey={1} title="THREAD">
            </Tab>
            <Tab eventKey={2} title="CHAT">
            </Tab>
        </Tabs>
        <br></br>
    </Styles>
)