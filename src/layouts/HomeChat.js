import React from 'react'
import { Card, Container } from 'react-bootstrap'
import { Form, Button } from 'semantic-ui-react'
import { FeedChat } from '../components/Feed'
import styled from 'styled-components'

const Styles = styled.div`
    .chat-container {
        flex-direction: row;
        height: 500px;
        overflow-y: auto;
    }

    .chat-feed {
        margin: 30px;
    }
`;

export const HomeChat = () => (
    <Styles>
        <Card className="chat-container">
            <Container className="chat-feed">
                <FeedChat></FeedChat>
            </Container>
        </Card>
        <br></br>
        <Form reply>
            <Form.TextArea placeholder='Enter text here..' />
            <Button content='Kirim' labelPosition='left' icon='send' primary />
        </Form>
    </Styles>
)