import React from 'react'
import { Card, Icon, Image, Container, Header, Button, Grid } from 'semantic-ui-react'
import "./style.css";
import { Link } from "react-router-dom";



const description = [
    'Amy is a violinist with 2 years experience in the wedding industry.',
    'She enjoys the outdoors and currently resides in upstate New York.',
].join(' ')
const src1 = 'https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20200309121707.jpg'
const src = 'https://i.ya-webdesign.com/images/avatar-png-1.png'

const CardExampleExtraContent = () => (
    <Card style={{ width: '100%' }}>
        <Card.Content header='Tour De Jodipan' />
        <Card.Content>
            <Image src={src1} fluid className="imageEvent" />
            <br></br>
            <br></br>

            <Container fluid>
                <Grid columns={3} divided centered>
                    <Grid.Row>
                        <Grid.Column>
                            <div className="detailEventTiket">Diselenggarakan Oleh</div>
                            <div style={{ marginTop: '16px' }}>
                                <Image src={src} verticalAlign='middle' size='mini' />{' '}
                                <span style={{ marginLeft: '10px' }} className="contentEventTiket" >Middle Aligned</span>
                            </div>


                        </Grid.Column>
                        <Grid.Column>
                            <div className="detailEventTiket">Waktu dan Tempat</div>
                            <div style={{ marginTop: '10px' }}>
                                <Icon name='calendar alternate outline' size='large' verticalAlign='middle' />
                                <span className="contentEventTiket" style={{ marginLeft: '5px' }}>20 Maret 2020</span>
                            </div>

                            <div style={{ marginTop: '10px' }}>
                                <Icon name='clock outline' size='large' verticalAlign='middle' />
                                <span className="contentEventTiket" style={{ marginLeft: '5px' }}>10.00-20.00</span>
                            </div>
                        </Grid.Column>
                        <Grid.Column>
                            <div className="detailEventTiket">Lokasi</div>
                            <div className="contentEventTiket" style={{ marginTop: '5px', verticalAlign: 'middle' }}>Lapangan Pussenif Angkatan Darat, Bandung, Jawa Barat</div>

                        </Grid.Column>
                    </Grid.Row>


                </Grid>
            </Container>

        </Card.Content>
    </Card>
)

export default CardExampleExtraContent