import React from 'react'
import { Card, Figure, ButtonGroup, Row, Col } from 'react-bootstrap'
import { Button, Icon, Image, Item, Label, Pagination, Menu } from 'semantic-ui-react'
import styled from 'styled-components'
import budi from '../assets/budi.jpg'
import bike from '../assets/bike.jpg'
import profileImage from '../assets/profile.jpg'

import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';

import { faThumbsUp, faThumbsDown, faEye, faComment, faPlus, faStream } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const paragraph = <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />

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
        display: inline-block;
    }
    .float-right {
        float: right;
    }
`;

export const HomeThread = () => (
    <Styles>
        {/* <Card>
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
        </Card> */}

        <Item.Group divided>

            <Item>
                <Item.Image size='small' src={budi} />
                <Item.Content>
                    <Item.Header as='a'>WOW</Item.Header>
                    <Item.Meta>
                        <a>Budi Setiawan</a>
                    </Item.Meta>
                    <Item.Description>
                        Jutaan orang bahkan tidak menyadari bahwa mereka bisa menghasilkan 1000 USD sehari tanpa meninggalkan rumah. Dan Anda adalah salah satu dari mereka. Halo, nama saya Budi Setiawan. Saya seorang trader profesional. Semua yang Anda lihat ini bisa saya raih dalam waktu kurang satu tahun.
                </Item.Description>
                    <Item.Extra>
                        <Button primary floated='left'>
                            Read full
                            <Icon name='right chevron' />
                        </Button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Menu compact>
                            <Menu.Item as='a'>
                                <Icon name='thumbs up' color='#' /> 420
                            </Menu.Item>
                            <Menu.Item as='a'>
                                <Icon name='thumbs down' /> 69
                            </Menu.Item>
                            <Menu.Item as='a'>
                                <Icon name='comment' /> 1000
                            </Menu.Item>
                        </Menu>
                        <br></br>
                        <span className="float-right">Posted at: 02-02-2020, 20:20</span>
                    </Item.Extra>
                </Item.Content>
            </Item>

            <Item>
                <Item.Image size='small' src={bike} />
                <Item.Content>
                    <Item.Header as='a'>Gowes</Item.Header>
                    <Item.Meta>
                        <a>Mamang Garox</a>
                    </Item.Meta>
                    <Item.Description>
                    Gowes adalah aktivitas mengayuh pedal pada sepeda, dan orang jaman now banyak menyebut kata gowes daripada mengayuh, mungkin dikarnakan lebih simpel dan enak didengar, serta lebih gaul terdengar di telinga.
                </Item.Description>
                    <Item.Extra>
                        <Button primary floated='left'>
                            Read full
                            <Icon name='right chevron' />
                        </Button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Menu compact>
                            <Menu.Item as='a'>
                                <Icon name='thumbs up' color='#' /> 10
                            </Menu.Item>
                            <Menu.Item as='a'>
                                <Icon name='thumbs down' /> 0
                            </Menu.Item>
                            <Menu.Item as='a'>
                                <Icon name='comment' /> 5
                            </Menu.Item>
                        </Menu>
                        <br></br>
                        <span className="float-right">Posted at: 02-02-2020, 20:20</span>
                    </Item.Extra>
                </Item.Content>
            </Item>

            <Item>
                <Item.Image size='small' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                <Item.Content>
                    <Item.Header as='a'>Lorem Ipsum</Item.Header>
                    <Item.Meta>
                        <a>John Doe</a>
                    </Item.Meta>
                    <Item.Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ligula libero, fringilla ut risus quis, aliquet molestie augue. Aliquam erat volutpat. Donec dictum, sem eget interdum gravida, lacus justo efficitur arcu, sit amet interdum risus diam vitae tortor.
                </Item.Description>
                    <Item.Extra>
                        <Button primary floated='left'>
                            Read full
                            <Icon name='right chevron' />
                        </Button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Menu compact>
                            <Menu.Item as='a'>
                                <Icon name='thumbs up' color='#' /> 0
                            </Menu.Item>
                            <Menu.Item as='a'>
                                <Icon name='thumbs down' /> 0
                            </Menu.Item>
                            <Menu.Item as='a'>
                                <Icon name='comment' /> 0
                            </Menu.Item>
                        </Menu>
                        <br></br>
                        <span className="float-right">Posted at: 02-02-2020, 20:20</span>
                    </Item.Extra>
                </Item.Content>
            </Item>

        </Item.Group>

        <br></br>
        <Pagination
            pagination
            defaultActivePage={1}
            firstItem={null}
            lastItem={null}
            pointing
            secondary
            totalPages={10}
        />

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