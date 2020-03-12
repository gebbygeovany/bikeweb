import React from 'react'
// import { Link } from 'react-router-dom';
import { ListGroup, Form, FormControl, Button } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .side-title {
      text-align:center;
  }
`;

export const SidebarHome = () => (
    <Styles>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <ListGroup defaultActiveKey="#link1">
            <ListGroup.Item className="side-title">
                COMMUNITY
            </ListGroup.Item>
            <Form>
                <p></p>
                <FormControl type="text" placeholder="Search.." />
                <p></p>
            </Form>
            <ListGroup.Item action href="#link1">
                Gowes Ngalam
            </ListGroup.Item>
            <ListGroup.Item action href="#link2">
                Grup 2
            </ListGroup.Item>
            <ListGroup.Item action href="#link3">
                Grup 3
            </ListGroup.Item>
            <ListGroup.Item action href="#link4">
                Grup 4
            </ListGroup.Item>
            <ListGroup.Item action href="#link5">
                Grup 5
            </ListGroup.Item>
        </ListGroup>
    </Styles >
)

export const SidebarFAQ = () => (
    <Styles>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <ListGroup defaultActiveKey="#link1">
            <ListGroup.Item className="side-title">
                TOPIC
            </ListGroup.Item>
            <Form>
                <p></p>
                <FormControl type="text" placeholder="Search.." />
                <p></p>
            </Form>
            <ListGroup.Item action href="#link1">
                Sepeda
            </ListGroup.Item>
            <ListGroup.Item action href="#link2">
                Topic 2
            </ListGroup.Item>
            <ListGroup.Item action href="#link3">
                Topic 3
            </ListGroup.Item>
            <ListGroup.Item action href="#link4">
                Topic 4
            </ListGroup.Item>
            <ListGroup.Item action href="#link5">
                Topic 5
            </ListGroup.Item>
        </ListGroup>
    </Styles >
)

export const SidebarExplore = () => (
    <Styles>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <ListGroup defaultActiveKey="#link1">
            <ListGroup.Item className="side-title">
                FILTER
            </ListGroup.Item>
            <Form>
                <p></p>
                <FormControl type="text" placeholder="Search.." />
                <p></p>
            </Form>

        </ListGroup>
    </Styles >
)