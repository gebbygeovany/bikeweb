import React, { Component } from 'react'
import { Grid, Header, Button, Message } from 'semantic-ui-react'
import FormInputBarang from "./FormInputBarang";
import "./style.css";


export default class InputBarang extends Component {
    constructor() {
        super();
        this.state = {
            tiket: []
        }
    }
    render() {

        return (
            <Grid>
                <Grid.Row></Grid.Row>
                <Grid.Row></Grid.Row>
                <Grid.Row></Grid.Row>
                <Grid.Row>

                    <Grid.Column width={2}></Grid.Column>
                    <Grid.Column width={12}>
                        <Header as='h3'>Tambah Barang</Header>
                        <Message color='olive'>
                            <Message.Header>Perhatian!</Message.Header>
                            <p>
                                Pastikan produk Anda sudah sesuai dengan <b>syarat dan ketentuan</b> Kami menghimbau seller untuk menjual produk dengar harga yang wajar atau produk Anda dapat diturunkan oleh Kami sesuai S&K yang berlaku..
                            </p>
                        </Message>
                        <FormInputBarang></FormInputBarang>
                    </Grid.Column>
                    <Grid.Column width={2}></Grid.Column>
                </Grid.Row>
                <Grid.Row></Grid.Row>

            </Grid>

        )
    }
}

