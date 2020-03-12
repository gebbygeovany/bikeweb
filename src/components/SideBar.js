import React from 'react'
// import { Link } from 'react-router-dom';
import { Card, ListGroup, ListGroupItem, Form, FormControl, Accordion, Button } from 'react-bootstrap';
import styled from 'styled-components';

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Styles = styled.div`
  .side-title {
      text-align:center;
  }
  .sidebar {
    position: fixed;
  }
  .collapse-icon {
    float: right;
}
`;

export const SidebarHome = () => (
    <Styles>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Card>
            <Card.Header className="side-title">
                <Card.Title>KOMUNITAS</Card.Title>
            </Card.Header>
            <Card.Body>
                <FormControl type="text" placeholder="Search.." />
            </Card.Body>
            <ListGroup defaultActiveKey="#link1">
                <ListGroup.Item action href="#link1">
                    Gowes Ngalam
                </ListGroup.Item>
                <ListGroup.Item action href="#link2">
                    Gowes 2
                </ListGroup.Item>
                <ListGroup.Item action href="#link3">
                    Gowes 3
                </ListGroup.Item>
                <ListGroup.Item action href="#link4">
                    Gowes 4
                </ListGroup.Item>
                <ListGroup.Item action href="#link5">
                    Gowes 5
                </ListGroup.Item>
            </ListGroup>
        </Card>
    </Styles >
)

export const SidebarFAQ = () => (
    <Styles>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Card>
            <Card.Header className="side-title">
                <Card.Title>TOPIK</Card.Title>
            </Card.Header>
            <Card.Body>
                <FormControl type="text" placeholder="Search.." />
            </Card.Body>
            <ListGroup defaultActiveKey="#link1">
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
        </Card>
    </Styles >
)

export const SidebarExplore = () => (
    <Styles>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Card>
            <Card.Header className="side-title">
                <Card.Title>FILTER</Card.Title>
            </Card.Header>
            <Card.Body>
                <FormControl type="text" placeholder="Search.." />
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>
                    <Accordion>
                        <Card>
                            <Accordion.Toggle eventKey="0">
                                Lokasi
                                <FontAwesomeIcon className="collapse-icon" icon={faChevronDown} />
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <Form>
                                        <Form.Group>
                                            <Form.Check aria-label="option 1">Jabodetabek</Form.Check>
                                            <Form.Check aria-label="option 2">Jawa Barat</Form.Check>
                                            <Form.Check aria-label="option 3">Jawa Tengah</Form.Check>
                                            <Form.Check aria-label="option 1">Jawa Timur</Form.Check>
                                        </Form.Group>
                                    </Form>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle eventKey="1">
                                Lokasi
                                <FontAwesomeIcon className="collapse-icon" icon={faChevronDown} />
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    <Form>
                                        <Form.Group>
                                            <Form.Check aria-label="option 1">Jabodetabek</Form.Check>
                                            <Form.Check aria-label="option 2">Jawa Barat</Form.Check>
                                            <Form.Check aria-label="option 3">Jawa Tengah</Form.Check>
                                            <Form.Check aria-label="option 1">Jawa Timur</Form.Check>
                                        </Form.Group>
                                    </Form>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </ListGroupItem>
            </ListGroup>
        </Card>
    </Styles >
)