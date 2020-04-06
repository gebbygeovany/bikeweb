import React from 'react'
import { Card, Image, Button, Form, TextArea } from 'semantic-ui-react'
import "./style.css";



const description = [
    'Amy is a violinist with 2 years experience in the wedding industry.',
    'She enjoys the outdoors and currently resides in upstate New York.',
].join(' ')
const src1 = 'https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20200309121707.jpg'
const src = 'https://i.ya-webdesign.com/images/avatar-png-1.png'

const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
]

const CardInputEvent = () => (
    <Card style={{ width: '100%' }}>
        <Card.Content header='Informasi Event' />
        <Card.Content>
            <Image src={src1} fluid className="imageEvent" />
            <br></br>
            <br></br>

            <Form style={{ padding: '10px' }}>

                <Form.Field>
                    <Form.Input
                        fluid
                        id='form-subcomponent-shorthand-input-first-name'
                        placeholder='Nama event'
                        label='Nama Event'

                    />
                </Form.Field>
                <Form.Field>
                    <Form.Select
                        fluid
                        options={options}
                        placeholder='Kategori event'
                        label='Kategori Event'

                    />
                </Form.Field>


                <Form.Field>
                    <Form.Group widths='equal'>

                        <Form.Input
                            fluid
                            id='form-subcomponent-shorthand-input-first-name'
                            placeholder='Penyeleggara'
                            border='none'
                            label='Penyelenggara'

                        />
                        <Form.Input
                            fluid
                            id='form-subcomponent-shorthand-input-last-name'
                            placeholder='Tanggal'
                            type='date'
                            label='Tanggal'

                        />
                        <Form.Input
                            fluid
                            id='form-subcomponent-shorthand-input-first-name'
                            placeholder='Waktu'
                            type='time'
                            label='Waktu'

                        />
                        <Form.Input
                            fluid
                            id='form-subcomponent-shorthand-input-last-name'
                            placeholder='Lokasi'
                            label='Lokasi'

                        />
                    </Form.Group>
                </Form.Field>
                <Form.Field
                    control={TextArea}
                    label='Deskripsi Event'
                    placeholder='Deskripsikan event mu...'
                />

            </Form>
        </Card.Content>
    </Card>
)

export default CardInputEvent