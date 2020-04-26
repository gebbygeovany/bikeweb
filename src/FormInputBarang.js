import React, { Component } from 'react'
import { Card, Form, Button, Select, TextArea, Image } from 'semantic-ui-react'

export default class FormInputBarang extends Component {
  constructor() {
    super();
    this.state = {
      tiket: []
    }
  }
  render() {
    const kategori = [
      { key: 'm', text: 'Male', value: 'male' },
      { key: 'f', text: 'Female', value: 'female' },
      { key: 'o', text: 'Other', value: 'other' },
    ]
    const kondisi = [
      { text: 'Baru', value: 'baru' },
      { text: 'Bekas', value: 'bekas' },
    ]
    return (
      <Card style={{ width: '100%' }}>
        <Card.Content>
          <Form>
            <Form.Field>
              <label>Foto Barang</label>
              <Image
                src='https://react.semantic-ui.com/images/wireframe/image.png'
                size='small'
                style={{marginTop:'10px', marginRight:'10px'}}
                
              />
              <Image
                src='https://react.semantic-ui.com/images/wireframe/image.png'
                size='small'
                style={{marginTop:'10px', marginRight:'10px'}}
                
              />
              <Image
                src='https://react.semantic-ui.com/images/wireframe/image.png'
                size='small'
                style={{marginTop:'10px', marginRight:'10px'}}
                
              />
              <Image
                src='https://react.semantic-ui.com/images/wireframe/image.png'
                size='small'
                style={{marginTop:'10px', marginRight:'10px'}}
                
              />
              <Image
                src='https://react.semantic-ui.com/images/wireframe/image.png'
                size='small'
                style={{marginTop:'10px', marginRight:'10px'}}
                
              />
            </Form.Field>
            <Form.Field>
              <label>Nama Barang</label>
              <input placeholder='Last Name' />
            </Form.Field>
            <Form.Group widths='equal'>
              <Form.Field
                control={Select}
                options={kategori}
                label={{ children: 'Kategori', htmlFor: 'form-select-control-kategori' }}
                placeholder='Kategori'
                search
                searchInput={{ id: 'form-select-control-kategori' }}
              />
              <Form.Field
                control={Select}
                options={kondisi}
                label={{ children: 'Kondisi Barang', htmlFor: 'form-select-control-kondisi' }}
                placeholder='Kondisi Barang'
                searchInput={{ id: 'form-select-control-kondisi' }}
              />
            </Form.Group>
            <Form.Field
              id='form-textarea-control-opinion'
              control={TextArea}
              label='Deskripsi Barang'
              placeholder='Deskripsi Barang'
            />
            <Form.Group widths='equal'>
              <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-first-name'
                label='Harga Barang'
                placeholder='First name'
                type='number'
              />
              <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-last-name'
                label='Stok Barang'
                placeholder='Last name'
                type='number'
              />
              <Form.Input
                fluid
                id='form-subcomponent-shorthand-input-last-name'
                label='Berat Barang'
                placeholder='Last name'
                type='number'
              />
            </Form.Group>
            <Button type='submit' color='orange' style={{width:'100%', marginTop:'10px'}}>Submit</Button>
          </Form>
        </Card.Content>

      </Card>


    )
  }
}


