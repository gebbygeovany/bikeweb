import React, { Component } from "react";

import { Table } from 'semantic-ui-react'


class FormPembayaranEvent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (

            <Table.Row>
                <Table.Cell style={{ paddingLeft: '30px' }}>{this.props.tiket.jenis}</Table.Cell>
                <Table.Cell style={{ paddingLeft: '30px' }}>Rp{this.props.tiket.hargaSatuan}</Table.Cell>

                <Table.Cell >
                    <div style={{ marginLeft: '14%' }}>{this.props.tiket.jumlahTiket}</div>
                </Table.Cell>
                <Table.Cell >Rp20.000</Table.Cell>
            </Table.Row>

        );
    }
}
export default FormPembayaranEvent;