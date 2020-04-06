import React from 'react'
import { Form, Input, TextArea, Button, Select, Table, Card } from 'semantic-ui-react'
import Dropdown from "./Dropdown";


const genderOptions = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
]
const items = [
    {
      header: 'Project Report - April',
    //   description:
    //     'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
    //   meta: 'ROI: 30%',
    },
    {
      header: 'Project Report - May',
    //   description:
    //     'Bring to the table win-win survival strategies to ensure proactive domination.',
    //   meta: 'ROI: 34%',
    },
    {
      header: 'Project Report - June',
    //   description:
    //     'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.',
    //   meta: 'ROI: 27%',
    },
    {
        header: 'Project Report - April',
      //   description:
      //     'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
      //   meta: 'ROI: 30%',
      },
      {
        header: 'Project Report - May',
      //   description:
      //     'Bring to the table win-win survival strategies to ensure proactive domination.',
      //   meta: 'ROI: 34%',
      },
      {
        header: 'Project Report - June',
      //   description:
      //     'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.',
      //   meta: 'ROI: 27%',
      },
  ]

export const FormDataTiket = () => (
    <Table striped>
        <Table.Header >
            <Table.Row>
                <Table.HeaderCell style={{ paddingLeft: '30px' }}>Jenis Tiket</Table.HeaderCell>
                <Table.HeaderCell>Jumlah Tiket</Table.HeaderCell>
                <Table.HeaderCell>Harga</Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
            <Table.Row>
                <Table.Cell style={{ paddingLeft: '30px' }}>John Lilki</Table.Cell>
                <Table.Cell>
                    <Dropdown></Dropdown>
                </Table.Cell>
                <Table.Cell>Rp20.000</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell style={{ paddingLeft: '30px' }}>Jamie Harington</Table.Cell>
                <Table.Cell>
                    <Dropdown></Dropdown>

                </Table.Cell>
                <Table.Cell>Rp20.000</Table.Cell>
            </Table.Row>
        </Table.Body>
    </Table>
)

export const FormKonfirmasiTiket = () => (
    <Table striped>
        <Table.Header >
            <Table.Row>
                <Table.HeaderCell style={{ paddingLeft: '30px' }}>Jenis Tiket</Table.HeaderCell>
                <Table.HeaderCell>Harga Per Tiket</Table.HeaderCell>
                <Table.HeaderCell>Jumlah Tiket</Table.HeaderCell>
                <Table.HeaderCell>Harga</Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
            <Table.Row>
                <Table.Cell style={{ paddingLeft: '30px' }}>John Lilki</Table.Cell>
                <Table.Cell style={{ paddingLeft: '30px' }}>John Lilki</Table.Cell>

                <Table.Cell >
                    <div style={{ marginLeft: '14%' }}>1</div>
                </Table.Cell>
                <Table.Cell >Rp20.000</Table.Cell>
            </Table.Row>



        </Table.Body>


    </Table>
)

export const FormDataPribadi = () => (
    <Form style={{ paddingLeft: '30px', paddingRight: '30px', paddingBottom: '30px' }}>
        <Form.Group widths='equal'>
            <Form.Field
                id='form-input-control-first-name'
                control={Input}
                label='Nama depan'
                placeholder='Nama depan'
            />
            <Form.Field
                id='form-input-control-last-name'
                control={Input}
                label='Nama belakang'
                placeholder='Nama belakang'
            />

        </Form.Group>
        <Form.Field
            id='form-input-control-last-name'
            control={Input}
            label='Nomor telepon'
            placeholder='Nomor telepon'
        />
        <Form.Field
            id='form-input-control-error-email'
            control={Input}
            label='Email'
            placeholder='joe@schmoe.com'
            error={{
                content: 'Tiket akan dikirim melalui email',
                pointing: 'below',
            }}
        />

    </Form>
)

export const FormDaftarFintech = () => (
    <Card.Group fluid items={items} style={{paddingLeft:'35px', paddingBottom:'35px'}}/>   
)


