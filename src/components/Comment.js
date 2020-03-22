import React from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import profile from '../assets/profile.jpg'
import budi from '../assets/budi.jpg'
import garox from '../assets/garox.jpg'

export const CommentThread = () => (
    <Comment.Group>
        <Header as='h3' dividing>
            Komentar
    </Header>

        <Comment>
            <Comment.Avatar src={garox} />
            <Comment.Content>
                <Comment.Author as='a'>Garox</Comment.Author>
                <Comment.Metadata>
                    <div>Today at 5:42PM</div>
                </Comment.Metadata>
                <Comment.Text>Assalamualaikum mamang, ga jawab ateis</Comment.Text>
                <Comment.Actions>
                    <Comment.Action>Balas</Comment.Action>
                </Comment.Actions>
            </Comment.Content>
            <Comment.Group>
                <Comment>
                    <Comment.Avatar src={budi} />
                    <Comment.Content>
                        <Comment.Author as='a'>Budi Setiawan</Comment.Author>
                        <Comment.Metadata>
                            <div>Just now</div>
                        </Comment.Metadata>
                        <Comment.Text>Waalaikumsalam</Comment.Text>
                        <Comment.Actions>
                            <Comment.Action>Balas</Comment.Action>
                        </Comment.Actions>
                    </Comment.Content>
                </Comment>
            </Comment.Group>
        </Comment>

        <Comment>
            <Comment.Avatar src={profile} />
            <Comment.Content>
                <Comment.Author as='a'>User</Comment.Author>
                <Comment.Metadata>
                    <div>1 day ago</div>
                </Comment.Metadata>
                <Comment.Text>WOW</Comment.Text>
                <Comment.Actions>
                    <Comment.Action>Balas</Comment.Action>
                </Comment.Actions>
            </Comment.Content>
        </Comment>

        <Form reply>
            <Form.TextArea rows={2} />
            <Button content='Tambah Komentar' labelPosition='left' icon='pencil' primary />
        </Form>
    </Comment.Group>
)
