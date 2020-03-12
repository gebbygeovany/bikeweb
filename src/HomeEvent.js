import React, { Component } from "react";
import "./style.css";
import CardEvent from "./CardEvent";
import FilterEvent from './filterEvent';
import 'semantic-ui-css/semantic.min.css';
import { Grid, Segment, GridColumn, Menu, Item, Pagination } from 'semantic-ui-react';



class HomeEvent extends Component {

    constructor() {
        super();
        this.state = {
            event: [
                {
                    foto: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    judul: "Mari Indonesia Gowes",
                    tanggal: "20 September 2020",
                    Lokasi: "Cikole Bandung",
                    deskripsi: "Gowes adalah aktivitas mengayuh pedal pada sepeda. Orang jaman sekarang lebih banyak menyebut kata gowes daripada mengayuh, mungkin dikarenakan lebih simpel dan enak didengar, serta lebih gaul terdengar di telinga.",
                },
                {
                    foto: "https://images.unsplash.com/photo-1488401318902-f7feae66db20?ixlib=rb-1.2.1&auto=format&fit=crop&w=779&q=80",
                    judul: "Tour de jodipan",
                    tanggal: "20 September 2020",
                    Lokasi: "Cikole Bandung",
                    deskripsi: "Gowes adalah aktivitas mengayuh pedal pada sepeda. Orang jaman sekarang lebih banyak menyebut kata gowes daripada mengayuh, mungkin dikarenakan lebih simpel dan enak didengar, serta lebih gaul terdengar di telinga.",
                },
                {
                    foto: "https://images.unsplash.com/photo-1495962263737-83d28ca0dc2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
                    judul: "Cycling For Lyfe",
                    tanggal: "20 September 2020",
                    Lokasi: "Cikole Bandung",
                    deskripsi: "Gowes adalah aktivitas mengayuh pedal pada sepeda. Orang jaman sekarang lebih banyak menyebut kata gowes daripada mengayuh, mungkin dikarenakan lebih simpel dan enak didengar, serta lebih gaul terdengar di telinga.",
                },
                {
                    foto: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
                    judul: "Mari Indonesia Gowes",
                    tanggal: "20 September 2020",
                    Lokasi: "Cikole Bandung",
                    deskripsi: "Gowes adalah aktivitas mengayuh pedal pada sepeda. Orang jaman sekarang lebih banyak menyebut kata gowes daripada mengayuh, mungkin dikarenakan lebih simpel dan enak didengar, serta lebih gaul terdengar di telinga.",
                },
                {
                    foto: "https://images.unsplash.com/photo-1488401318902-f7feae66db20?ixlib=rb-1.2.1&auto=format&fit=crop&w=779&q=80",
                    judul: "Tour de jodipan",
                    tanggal: "20 September 2020",
                    Lokasi: "Cikole Bandung",
                    deskripsi: "Gowes adalah aktivitas mengayuh pedal pada sepeda. Orang jaman sekarang lebih banyak menyebut kata gowes daripada mengayuh, mungkin dikarenakan lebih simpel dan enak didengar, serta lebih gaul terdengar di telinga.",
                },
                {
                    foto: "https://images.unsplash.com/photo-1495962263737-83d28ca0dc2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
                    judul: "Cycling For Lyfe",
                    tanggal: "20 September 2020",
                    Lokasi: "Cikole Bandung",
                    deskripsi: "Gowes adalah aktivitas mengayuh pedal pada sepeda. Orang jaman sekarang lebih banyak menyebut kata gowes daripada mengayuh, mungkin dikarenakan lebih simpel dan enak didengar, serta lebih gaul terdengar di telinga.",
                },
            ]
        }
    }

    state = {
        visibile: true,
        modalIsOpen: false
    }
    render() {
        let cardEvent = this.state.event.map(event => {
            return (
                <CardEvent event={event}></CardEvent>
            )
        });

        return (
            <div>
                <Grid centered columns={2} >
                    <Grid.Row></Grid.Row>
                    <Grid.Row></Grid.Row>
                    <Grid.Row></Grid.Row>
                    <Grid.Row></Grid.Row>

                    <Grid.Row >
                        <Grid.Column width={1}></Grid.Column>
                        <Grid.Column width={3} >
                            <FilterEvent ></FilterEvent>
                        </Grid.Column>
                        <Grid.Column width={11}>
                            <Item.Group divided>{cardEvent}</Item.Group>

                        </Grid.Column>
                        <Grid.Column width={1}></Grid.Column>
                    </Grid.Row>

                    <Grid.Row></Grid.Row>

                    <Grid.Row >
                        <Grid.Column width={1}></Grid.Column>
                        <Grid.Column width={3}></Grid.Column>
                        <Grid.Column width={11}>
                            <Pagination
                                defaultActivePage={1}
                                firstItem={null}
                                lastItem={null}
                                pointing
                                secondary
                                totalPages={10}
                                style={{
                                    position: 'absolute',
                                    left: '50%',
                                    top: '50%',
                                    transform: 'translate(-50%, -50%)'
                                }}
                            />

                        </Grid.Column>
                        <Grid.Column width={1}></Grid.Column>
                    </Grid.Row>

                </Grid>
            </div>
        );
    }
}

export default HomeEvent;