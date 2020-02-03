import React, { useState } from 'react';
import { Tabs, Tab, Nav, Card } from 'react-bootstrap';
import { HomeThread } from '../layouts/HomeThread'
import { HomeChat } from '../layouts/HomeChat'
import styled from 'styled-components';

import { faStream, faComments } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Styles = styled.div`
    .nav {
        display: flex;
        justify-content: center;
        text-align: center;
    }
`;

export const TabBar = () => {
    const [key, setKey] = useState('thread')
    return (
        <Styles>
            <br></br>
            <Tab.Container activeKey={key} onSelect={k => setKey(k)}>
                <Nav variant="pills">
                    <Nav.Item>
                        <Nav.Link eventKey="thread"><FontAwesomeIcon icon={faStream} />{'  '}THREAD</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="chat"><FontAwesomeIcon icon={faComments} />{'  '}CHAT</Nav.Link>
                    </Nav.Item>
                </Nav>
                <br></br>
                <Tab.Content>
                    <Tab.Pane eventKey="thread">
                        <HomeThread />
                    </Tab.Pane>
                    <Tab.Pane eventKey="chat">
                        <HomeChat />
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
            <br></br>
        </Styles>
    )
}