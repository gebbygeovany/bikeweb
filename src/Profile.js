import React, { Component } from 'react'
import { Grid, Header, Button, Message, Menu } from 'semantic-ui-react'
import SidebarProfile from "./SidebarProfile";
import ItemPembelianProfile from "./ItemPembelianProfile";
import ItemPenjualanBarang from "./ItemPenjualanBarang";
import ItemRiwayatPembelian from "./ItemRiwayatPembelian";
import "./style.css";



export default class Profile extends Component {
    constructor() {
        super();

    }
    state = { activeItem: 'Pembelian' }

    handleItemClick = (e, { name }) => {
        this.setState({
            activeItem: name
        })
    }

    sidebarContent() {
        if (this.state.activeItem==='Pembelian') {
            return <ItemPembelianProfile></ItemPembelianProfile>
        }
        else if (this.state.activeItem==='Penjualan') {
            return <ItemPenjualanBarang></ItemPenjualanBarang>
        }
        else{
            return <ItemRiwayatPembelian></ItemRiwayatPembelian>

        }
    }
    render() {
        const { activeItem } = this.state
        
        return (
            <Grid>
                <Grid.Row></Grid.Row>
                <Grid.Row></Grid.Row>
                <Grid.Row></Grid.Row>
                <Grid.Row></Grid.Row>

                <Grid.Row>
                    <Grid.Column width={1}></Grid.Column>
                    <Grid.Column width={3}>
                        <Menu pointing secondary vertical>
                            <Menu.Item
                                name='Pembelian'
                                active={activeItem === 'Pembelian'}
                                onClick={this.handleItemClick}
                            />
                            <Menu.Item
                                name='Penjualan'
                                active={activeItem === 'Penjualan'}
                                onClick={this.handleItemClick}
                            />
                            <Menu.Item
                                name='Riwayat Pembelian'
                                active={activeItem === 'Riwayat Pembelian'}
                                onClick={this.handleItemClick}
                            />
                        </Menu>
                    </Grid.Column>
                    <Grid.Column width={11}>
                        {this.sidebarContent()}
                    </Grid.Column>
                    <Grid.Column width={1}></Grid.Column>
                </Grid.Row>
                <Grid.Row></Grid.Row>

            </Grid>

        )
    }
}

