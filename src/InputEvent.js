import React, { Component } from 'react'
import { Grid, Header, Button } from 'semantic-ui-react'
import CardInputEvent from "./CardInputEvent";
import InputTiket from "./InputTiket";
import CardListTiket from "./CardListTiket";
import "./style.css";


export default class InputEvent extends Component {
    constructor() {
        super();
        this.state = {
            tiket: []
        }
    }
    addTiket = (jenisTiket) => {
        this.setState(prevState => ({
            tiket: [...prevState.tiket, {jenis: jenisTiket }]
        }))
    }



    render() {

        let listTiket = this.state.tiket.map(tiket => {
            return (
                <CardListTiket tiket={tiket}></CardListTiket >
            )
        });

        return (
            <Grid>
                <Grid.Row></Grid.Row>
                <Grid.Row></Grid.Row>
                <Grid.Row></Grid.Row>
                <Grid.Row>
                    <Grid.Column width={3}></Grid.Column>
                    <Grid.Column width={10}>
                        <CardInputEvent></CardInputEvent>
                        <Header as='h3'>Detail Tiket</Header>
                        {listTiket}
                        <InputTiket addTiket={this.addTiket.bind(this)}></InputTiket>
                        <br></br>
                        <br></br>
                        <Button color='orange' style={{ width: '100%', height: '3rem' }}>
                            Buat Event Sekarang
                        </Button>
                    </Grid.Column>
                    <Grid.Column width={3}></Grid.Column>
                </Grid.Row>
                <Grid.Row></Grid.Row>

            </Grid>

        )
    }
}

