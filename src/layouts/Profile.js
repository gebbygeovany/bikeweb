import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Feed, Menu, Icon } from 'semantic-ui-react'
import { CarouselThread } from '../components/Carousel'
import { CommentThread } from '../components/Comment'
import styled from 'styled-components'
import budi from '../assets/budi.jpg'

const Styles = styled.div`
    .paragraph {
        font-size: 18px;
        white-space: pre-line;
    }
`;

export const ThreadDetail = () => (
    <Styles>
        <Row>
            <Col sm={2} />
            <Col sm={8}>
                <br></br><br></br>
                <h1>{judul}</h1>

                <Feed>
                    <Feed.Event>
                        <Feed.Label image={image} />
                        <Feed.Content>
                            <Feed.Summary>
                                <Feed.User>{user}</Feed.User>
                                <Feed.Date>{date}</Feed.Date>
                            </Feed.Summary>
                        </Feed.Content>
                    </Feed.Event>
                </Feed>

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

                <br></br><br></br>
                <CarouselThread />

                <br></br>
                <p className="paragraph">{paragraph1}</p>
                <p className="paragraph">{paragraph2}</p>
                <p className="paragraph">{paragraph3}</p>
                <p className="paragraph">{paragraph4}</p>
                <p className="paragraph">{paragraph5}</p>

                <br></br>
                <CommentThread></CommentThread>
            </Col>
            <Col sm={2} />
        </Row>
    </Styles>
)