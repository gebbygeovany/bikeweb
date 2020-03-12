import React from 'react'
import { Card, Figure, ButtonGroup, Button, Row, Col, Pagination } from 'react-bootstrap'
import styled from 'styled-components'
import budi from '../assets/budi.jpg'
import profileImage from '../assets/profile.jpg'

import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';

import { faThumbsUp, faThumbsDown, faEye, faComment, faPlus, faStream } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Styles = styled.div`
    .thread-title {
        font-size:medium;
    }
    .thread-text {
        font-size:small;
    }
    .thread-footer-text {
        font-size:small;
        text-align:right;
        color:grey;
    }
    .thread-name {
        text-align:center;
        font-size:small;
    }
    .pagination {
        text-align:center;
        color:black;
    }
`;

export const HomeThread = () => (
    <Styles>
        <Card>
            <Card.Header className="thread-title">
                Gowes
            </Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <Row>
                        <Col md={2}>
                            <Figure>
                                <Figure.Image
                                    width={90}
                                    height={90}
                                    src={budi}
                                    alt="Foto"
                                    roundedCircle="true"
                                />
                                <Figure.Caption className="thread-name">
                                    Budi Setiawan
                                </Figure.Caption>
                            </Figure>
                        </Col>
                        <Col md={10} className="thread-text">
                            Gowes adalah aktivitas mengayuh pedal pada sepeda, dan orang jaman now banyak menyebut kata gowes daripada mengayuh, mungkin dikarnakan lebih simpel dan enak didengar, serta lebih gaul terdengar di telinga.
                            {/* Jutaan orang bahkan tidak menyadari bahwa mereka bisa menghasilkan 1000 USD sehari tanpa meninggalkan rumah. Dan Anda adalah salah satu dari mereka. Halo, nama saya Budi Setiawan. Saya seorang trader profesional. Semua yang Anda lihat ini bisa saya raih dalam waktu kurang satu tahun. Setahun yang lalu saya menemukan Binomo. Ini adalah platform. Bagi para pemula pun dapat melakukan transaksi perdagangan. Dan yang seperti saya katakan, saya sekarang bisa menghasilkan lebih dari 1000 USD hanya dengan mencurahkan dua sampai tiga jam waktu saya untuk trading */}
                        </Col>
                    </Row>
                    <footer className="thread-footer">
                        <Row>
                            <Col md={2} />
                            <Col md={3}><Button size="sm" variant="success">Full Thread{'  '}<FontAwesomeIcon icon={faEye} /></Button></Col>
                            <Col md={4}>
                                <ButtonGroup aria-label="Basic example">
                                    <Button size="sm" variant="primary">420{'  '}<FontAwesomeIcon icon={faThumbsUp} /></Button>
                                    <Button size="sm" variant="danger">69{'  '}<FontAwesomeIcon icon={faThumbsDown} /></Button>
                                    <Button size="sm" variant="warning">666{'  '}<FontAwesomeIcon icon={faComment} /></Button>
                                </ButtonGroup>
                            </Col>
                            <Col md={3} className="thread-footer-text">
                                Posted at: 02-02-2020, 20:20
                        </Col>
                        </Row>
                    </footer>
                </blockquote>
            </Card.Body>
        </Card>

        <br></br>
        <Card>
            <Card.Header>
                <h5>Lorem Ipsum</h5>
            </Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <Row>
                        <Col md={2}>
                            <Figure>
                                <Figure.Image
                                    width={90}
                                    height={90}
                                    src={profileImage}
                                    alt="Foto"
                                    roundedCircle="true"
                                />
                                <Figure.Caption className="thread-name">
                                    Nama
                                </Figure.Caption>
                            </Figure>
                        </Col>
                        <Col md={10} className="thread-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </Col>
                    </Row>
                    <br></br>
                    <footer className="thread-footer">
                        <Row>
                            <Col md={2} />
                            <Col md={3}><Button size="sm" variant="success">Full Thread{'  '}<FontAwesomeIcon icon={faEye} /></Button></Col>
                            <Col md={4}>
                                <ButtonGroup aria-label="Basic example">
                                    <Button size="sm" variant="primary">0{'  '}<FontAwesomeIcon icon={faThumbsUp} /></Button>
                                    <Button size="sm" variant="danger">0{'  '}<FontAwesomeIcon icon={faThumbsDown} /></Button>
                                    <Button size="sm" variant="warning">0{'  '}<FontAwesomeIcon icon={faComment} /></Button>
                                </ButtonGroup>
                            </Col>
                            <Col md={3} className="thread-footer-text">
                                Posted at: 02-02-2020, 20:20
                        </Col>
                        </Row>
                    </footer>
                </blockquote>
            </Card.Body>
        </Card>

        <br></br>
        <Card>
            <Card.Header>
                <h5>Lorem Ipsum</h5>
            </Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <Row>
                        <Col md={2}>
                            <Figure>
                                <Figure.Image
                                    width={100}
                                    height={100}
                                    src={profileImage}
                                    alt="Foto"
                                    roundedCircle="true"
                                />
                                <Figure.Caption className="thread-name">
                                    Nama
                                </Figure.Caption>
                            </Figure>
                        </Col>
                        <Col md={10} className="thread-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </Col>
                    </Row>
                    <br></br>
                    <footer className="thread-footer">
                        <Row>
                            <Col md={2} />
                            <Col md={3}><Button size="sm" variant="success">Full Thread{'  '}<FontAwesomeIcon icon={faEye} /></Button></Col>
                            <Col md={4}>
                                <ButtonGroup aria-label="Basic example">
                                    <Button size="sm" variant="primary">0{'  '}<FontAwesomeIcon icon={faThumbsUp} /></Button>
                                    <Button size="sm" variant="danger">0{'  '}<FontAwesomeIcon icon={faThumbsDown} /></Button>
                                    <Button size="sm" variant="warning">0{'  '}<FontAwesomeIcon icon={faComment} /></Button>
                                </ButtonGroup>
                            </Col>
                            <Col md={3} className="thread-footer-text">
                                Posted at: 02-02-2020, 20:20
                        </Col>
                        </Row>
                    </footer>
                </blockquote>
            </Card.Body>
        </Card>

        <br></br>
        <Pagination className="pagination">
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
        </Pagination>

        <Fab
            icon={<FontAwesomeIcon icon={faPlus} />}
            mainButtonStyles={fab_styles}
        >
            <Action
                text="Buat Thread"
                onClick={''}
                style={fab_styles}
            >
                <FontAwesomeIcon icon={faStream} />
            </Action>
        </Fab>
    </Styles>
)

const fab_styles = {
    background: "#007bff"
};