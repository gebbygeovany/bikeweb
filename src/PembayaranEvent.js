import React, { Component } from "react";
import "./style.css";
import 'semantic-ui-css/semantic.min.css';
import { Card, Icon, Rating, Image, Item, Label, Button, Grid, Table } from 'semantic-ui-react';
import { ListKonfirmasi, FormDataPribadi, FormDaftarFintech } from "./FormPembelianEvent";
import CardDetailEvent from "./CardDetailEvent";
import ListKonfirmasiEvent from "./ListKonfirmasiEvent";
import { StepDua } from "./Step";


class DetailEvent extends Component {
    constructor() {
        super();
        this.state = {
            tiket: [
                {
                    jenis: "Presale 1",
                    hargaSatuan: 20000,
                    jumlahTiket: 3,
                },
                {
                    jenis: "Presale 2",
                    hargaSatuan: 30000,
                    jumlahTiket: 4,
                },
                {
                    jenis: "Presale 3",
                    hargaSatuan: 20000,
                    jumlahTiket: 3,
                },
                {
                    jenis: "OTS",
                    hargaSatuan: 30000,
                    jumlahTiket: 4,
                },
            ]

        }
    }
    render() {
        let listTiket = this.state.tiket.map(tiket => {
            return (
                <ListKonfirmasiEvent tiket={tiket}></ListKonfirmasiEvent>
            )
        });

        return (
            <Grid>
                <Grid.Row></Grid.Row>
                <Grid.Row></Grid.Row>
                <Grid.Row></Grid.Row>
                <Grid.Row></Grid.Row>
                <Grid.Row>
                    <Grid.Column width={2}></Grid.Column>
                    <Grid.Column width={12}>
                        <StepDua></StepDua>

                        <Card fluid>
                            <CardDetailEvent></CardDetailEvent>
                        </Card>


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
                                {listTiket}
                                <Table.Row>
                                    <Table.Cell className='totalPembayaran' style={{ paddingLeft: '30px' }}>Total Pembayaran</Table.Cell>
                                    <Table.Cell style={{ paddingLeft: '30px' }}></Table.Cell>
                                    <Table.Cell className='totalPembayaran'><div style={{ marginLeft: '14%' }}>2</div></Table.Cell>
                                    <Table.Cell className='totalPembayaran'>Rp200.000</Table.Cell>
                                </Table.Row>
                            </Table.Body>


                        </Table>


                        <Card fluid>
                            <Card.Content header='Metode Pembayaran' style={{ marginLeft: '15px', marginTop: '10px', marginBottom: '10px' }} />
                            <FormDaftarFintech></FormDaftarFintech>
                        </Card>
                        <Button style={{ width: '100%', backgroundColor: '#FA591D', height: '45px' }}>
                            <span className="btnBeli">Selanjutnya</span>
                        </Button>
                    </Grid.Column>
                    <Grid.Column width={2}></Grid.Column>
                </Grid.Row>


            </Grid>

        );
    }
}
export default DetailEvent;