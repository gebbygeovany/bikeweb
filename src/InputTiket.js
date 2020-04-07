import React, { Component, useState } from "react";
import "./style.css";
import 'semantic-ui-css/semantic.min.css';
import { Card, Form, Grid, Button } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import { FiPlusCircle } from 'react-icons/fi';
import InputEvent from "./InputEvent";
import ModalTambahTiket from "./ModalTambahTiket";
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class InputTiket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true,
            modalGratisIsOpen: false,
            modalBayarIsOpen: false,
            nama: '',
            jumlah: 0,
            harga: 0,
            deskripsi: ''
        }
    }

    addTiketBayar() {
        this.props.addTiket('Rp50.000')
        this.setState({
            modalBayarIsOpen: !this.state.modalBayarIsOpen,
        });
    }
    addTiketGratis = () => {
        this.props.addTiket('Gratis')
        this.setState({
            modalGratisIsOpen: !this.state.modalGratisIsOpen
        });
    }
    handleNamaChange = (event) => {
        this.setState({
            nama: event.target.value
        })
    }
    toggleModalGratis() {
        this.setState({
            modalGratisIsOpen: !this.state.modalGratisIsOpen
        });
    }
    toggleModalBayar() {
        this.setState({
            modalBayarIsOpen: !this.state.modalBayarIsOpen
        });
    }

    render() {
        const src = 'https://i.ya-webdesign.com/images/avatar-png-1.png'

        return (


            <div>

                <Grid columns={2} centered>
                    <Grid.Row style={{ marginTop: '10px' }}>
                        <Grid.Column >
                            <Card
                                link
                                style={{ float: 'right', width: '16rem' }}
                                onClick={this.toggleModalBayar.bind(this)}
                            >
                                <Grid columns={2} divided centered>
                                    <Grid.Row>
                                        <Grid.Column width={9} >
                                            <div style={{ fontSize: '14px', paddingTop: '20px', paddingLeft: '10px' }}>Buat Tiket</div>
                                            <div style={{ fontSize: '20px', paddingLeft: '10px', paddingBottom: '20px' }}>Berbayar</div>
                                        </Grid.Column>
                                        <Grid.Column width={6}>
                                            <h1 style={{ paddingTop: '20px', paddingLeft: '12px', color: '#1678c2' }}><FiPlusCircle></FiPlusCircle></h1>
                                        </Grid.Column>
                                    </Grid.Row>


                                </Grid>
                            </Card>
                        </Grid.Column>
                        <Grid.Column>
                            <Card
                                link
                                style={{ float: 'left', width: '16rem' }}
                                onClick={this.toggleModalGratis.bind(this)}
                            >


                                <Grid columns={2} divided centered>
                                    <Grid.Row>
                                        <Grid.Column width={9} >
                                            <div style={{ fontSize: '14px', paddingTop: '20px', paddingLeft: '10px' }}>Buat Tiket</div>
                                            <div style={{ fontSize: '20px', paddingLeft: '10px', paddingBottom: '20px' }}>Gratis</div>
                                        </Grid.Column>
                                        <Grid.Column width={6}>
                                            <h1 style={{ paddingTop: '20px', paddingLeft: '12px', color: '#1678c2' }}><FiPlusCircle></FiPlusCircle></h1>
                                        </Grid.Column>
                                    </Grid.Row>


                                </Grid>
                            </Card>
                        </Grid.Column>
                    </Grid.Row>


                </Grid>


                <Modal isOpen={this.state.modalGratisIsOpen} style={{ marginTop: '100px' }} >
                    <ModalHeader toggle={this.toggleModalGratis.bind(this)}>Detail Tiket</ModalHeader>
                    <ModalBody>
                        <Form
                            style={{ padding: '5px' }}
                            // onSubmit={this.addTiketGratis}
                        >
                            <Form.Field >
                                <label style={{ fontWeight: 500 }}>Nama Tiket</label>
                                <input
                                    placeholder='Nama tiket'
                                    value={this.state.nama}
                                // onChange={this.handleNamaChange}
                                />
                            </Form.Field>
                            <Form.Field>
                                <label style={{ fontWeight: 500 }}>Jumlah Tiket</label>
                                <input placeholder='Jumlah tiket' type='number' />
                            </Form.Field>
                            <Form.Field>
                                <label style={{ fontWeight: 500 }}>Deskripsi Tiket</label>
                                <Form.TextArea placeholder='Deskripsikan tiket ini...' ></Form.TextArea>
                            </Form.Field>
                            <Button
                                color="primary"
                                type='submit'
                                onClick={() => this.addTiketGratis()}
                                floated='right'
                            >
                                Buat Tiket Gratis
                            </Button>{' '}
                            <Button
                                color="secondary"
                                onClick={this.toggleModalGratis.bind(this)}
                                floated='right'
                            >
                                Batal
                            </Button>
                        </Form>
                    </ModalBody>
                </Modal>

                <Modal isOpen={this.state.modalBayarIsOpen} style={{ marginTop: '100px' }} >
                    <ModalHeader toggle={this.toggleModalBayar.bind(this)}>Detail Tiket</ModalHeader>
                    <ModalBody>
                        <Form style={{ padding: '5px' }}>
                            <Form.Field >
                                <label style={{ fontWeight: 500 }}>Nama Tiket</label>
                                <input placeholder='Nama tiket' />
                            </Form.Field>
                            <Form.Field>
                                <label style={{ fontWeight: 500 }}>Jumlah Tiket</label>
                                <input placeholder='Jumlah tiket' type='number' />
                            </Form.Field>
                            <Form.Field>
                                <label style={{ fontWeight: 500 }}>Harga Tiket</label>
                                <input placeholder='Harga tiket' type='number'>

                                </input>
                            </Form.Field>
                            <Form.Field>
                                <label style={{ fontWeight: 500 }}>Deskripsi Tiket</label>
                                <Form.TextArea placeholder='Deskripsikan tiket ini...' ></Form.TextArea>
                            </Form.Field>
                            <Button
                                color="primary"
                                type='submit'
                                onClick={() => this.addTiketBayar()}
                                floated='right'
                            >
                                Buat Tiket Berbayar
                            </Button>{' '}
                            <Button
                                color="secondary"
                                onClick={this.toggleModalBayar.bind(this)}
                                floated='right'
                            >
                                Batal
                            </Button>
                        </Form>
                    </ModalBody>

                </Modal>
            </div>

        );
    
    }
}
export default InputTiket;