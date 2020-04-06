import React, { Component } from "react";
import "./style.css";
import 'semantic-ui-css/semantic.min.css';
import { Card, Icon, Rating, Image, Item, Label, Button, Grid, Segment, Divider } from 'semantic-ui-react';
import CardCheckout from "./CardCheckout";
import {CardRingkasanBelanjaCheckout} from "./CardRingkasanBelanja";
import ItemAlamat from "./ItemAlamat";




class CheckoutBarang extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <Grid>
                <Grid.Row></Grid.Row>
                <Grid.Row></Grid.Row>
                <Grid.Row></Grid.Row>
                <Grid.Row>
                    <Grid.Column width={2}></Grid.Column>
                    <Grid.Column width={9}>
                        <div style={{ fontWeight: '500', fontSize: '22px', marginBottom:'15px'}}>Checkout</div>
                        <span style={{ fontWeight: '500', fontSize: '16px' }}>Alamat Pengiriman</span>
                        <Divider />
                        <ItemAlamat></ItemAlamat>
                        <Divider />
                        <Button>Pilih Alamat Lain</Button>
                        <CardCheckout></CardCheckout>
                        <CardCheckout></CardCheckout>
                        <CardCheckout></CardCheckout>
                    </Grid.Column>
                    <Grid.Column width={4}><CardRingkasanBelanjaCheckout></CardRingkasanBelanjaCheckout></Grid.Column>
                    <Grid.Column width={1}></Grid.Column>
                </Grid.Row>


                <Grid.Row></Grid.Row>

            </Grid>

        );
    }
}
export default CheckoutBarang;