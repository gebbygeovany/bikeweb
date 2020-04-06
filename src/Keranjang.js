import React, { Component } from "react";
import "./style.css";
import 'semantic-ui-css/semantic.min.css';
import { Card, Icon, Rating, Image, Item, Label, Button, Grid } from 'semantic-ui-react';
import CardKeranjang from "./CardKeranjang";
import {CardRingkasanBelanjaKeranjang} from "./CardRingkasanBelanja";




class Keranjang extends Component {
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
                    <Grid.Column width={8}>
                        <CardKeranjang></CardKeranjang>
                        <CardKeranjang></CardKeranjang>
                        <CardKeranjang></CardKeranjang>

                    </Grid.Column>
                    <Grid.Column width={4}><CardRingkasanBelanjaKeranjang></CardRingkasanBelanjaKeranjang></Grid.Column>
                    <Grid.Column width={2}></Grid.Column>
                </Grid.Row>


                <Grid.Row></Grid.Row>

            </Grid>

        );
    }
}
export default Keranjang;