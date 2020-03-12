import React, { Component } from "react";
import "./style.css";
import 'semantic-ui-css/semantic.min.css';
import { Card, Icon, Rating, Image, Item, Label, Button, Grid } from 'semantic-ui-react';
import { FaBoxOpen } from 'react-icons/fa';
import JumlahBarang from "./JumlahBarang";
import CatatanBarang from "./CatatanBarang";


class ContentDetailBarang extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const paragraph = <Image src='/images/wireframe/short-paragraph.png' />
        return (
            <Item.Group divided style={{ width: '93%' }}>
                <Item >
                    <Item.Content>
                        <Item className="judulBarang"><h3>BROMPTON EXPLORE EDITION</h3></Item>
                        <Item.Meta>
                            <Rating icon='star' defaultRating={5} maxRating={5} size='tiny' />
                        </Item.Meta>

                        <Item.Extra>
                            <Label>IMAX</Label>
                            <Label icon='globe' content='Additional Languages' />
                        </Item.Extra>
                    </Item.Content>
                </Item>

                <Item>
                    <Item.Content>
                        <Grid divided='vertically'>
                            <Grid.Row columns={3}>
                                <Grid.Column width={4}>
                                    <span className='hargaBarangGrid'>Harga Barang</span>
                                </Grid.Column>

                                <Grid.Column width={5}>
                                    <span className='nominalHargaBarangGrid'>Rp50.000.000</span>
                                </Grid.Column>


                            </Grid.Row>
                        </Grid>
                    </Item.Content>
                </Item>

                <Item>
                    <Item.Content>
                        <Grid divided='vertically'>
                            <Grid.Row columns={2} style={{paddingBottom:'0px'}}>
                                <Grid.Column width={4}>
                                    <span className='hargaBarangGrid'>Jumlah Barang</span>
                                </Grid.Column>

                                <Grid.Column width={12} style={{marginBottom:'0px'}}>
                                    
                                    <JumlahBarang ></JumlahBarang>
                                </Grid.Column>
                                <Grid.Column width={4}></Grid.Column>
                                <Grid.Column width={12}>
                                    <CatatanBarang></CatatanBarang>
                                </Grid.Column>

                            </Grid.Row>
                        </Grid>
                    </Item.Content>
                </Item>
                <Item>
                    <Item.Content>

                        <Grid divided='vertically'>
                            <Grid.Row columns={2}>
                                <Grid.Column width={4}>
                                    <span className='hargaBarangGrid'>Info Barang</span>
                                </Grid.Column>

                                <Grid.Column width={12}>
                                    <Grid columns={2} divided style={{ marginLeft: '1px' }}>
                                        <Grid.Row>
                                            <Grid.Column width={5}>
                                                <Icon name='weight' size='big' color='grey' />
                                                <span className='infoBarang'>10 KG</span>
                                            </Grid.Column>
                                            <Grid.Column width={11}>
                                                <Icon name='box' size='big' color='grey' />
                                                <span className='infoBarang'>Baru</span>
                                            </Grid.Column>


                                        </Grid.Row>

                                    </Grid>
                                </Grid.Column>
                                <Grid.Column width={16}>
                                    <Button  style={{ width: '101%', marginLeft: '2%', marginTop: '20px', height: '45px', backgroundColor:'#FA591D'}}>
                                        <span className="btnBeli">BELI SEKARANG</span>
                                    </Button>

                                </Grid.Column>

                            </Grid.Row>
                        </Grid>
                    </Item.Content>
                </Item>
            </Item.Group>
        );
    }
}
export default ContentDetailBarang;