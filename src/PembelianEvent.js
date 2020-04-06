import React, { Component } from "react";
import "./style.css";
import 'semantic-ui-css/semantic.min.css';
import { Card, Icon, Rating, Image, Item, Label, Button, Grid } from 'semantic-ui-react';
import { FormDataTiket, FormDataPribadi } from "./FormPembelianEvent";
import { StepSatu, StepDua, StepTiga } from "./Step";
import { Link } from "react-router-dom";
import CardDetailEvent from "./CardDetailEvent";




class DetailEvent extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <Grid>
                <Grid.Row></Grid.Row>
                <Grid.Row></Grid.Row>
                <Grid.Row></Grid.Row>
                <Grid.Row></Grid.Row>
                <Grid.Row>
                    <Grid.Column width={2}></Grid.Column>
                    <Grid.Column width={12}>
                        <StepSatu></StepSatu>
                        <Card fluid>
                            <CardDetailEvent></CardDetailEvent>
                        </Card>
                        <FormDataTiket></FormDataTiket>

                        <Card fluid>
                            <Card.Content header='Data Pribadi' style={{ marginLeft: '15px', marginTop: '10px', marginBottom: '10px' }} />
                            <FormDataPribadi></FormDataPribadi>
                        </Card>
                        <Link to={'./PembayaranEvent'}>
                            <Button style={{ width: '100%', backgroundColor: '#FA591D', height: '45px' }}>
                                <span className="btnBeli">Selanjutnya</span>
                            </Button>
                        </Link>

                    </Grid.Column>
                    <Grid.Column width={2}></Grid.Column>
                </Grid.Row>


            </Grid>

        );
    }
}
export default DetailEvent;