import React, { Component } from "react";
import { Card, Icon, Item, Image, Checkbox, Grid, Dropdown, Label } from 'semantic-ui-react'
import ItemBarangCheckout from "./ItemBarangCheckout";
import ItemPelapakCheckout from "./ItemPelapakCheckout";



const src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/16777216colors.png/220px-16777216colors.png'
const src2 = 'https://i.ya-webdesign.com/images/avatar-png-1.png'

class CardCheckout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            placeholder: 'Pengiriman',
            color: 'transparent',
            ongkir: 0
        }
    }
    onChangeKurir(kurir, ongkir) {
        this.setState({
            placeholder: kurir,
            color: 'blue',
            ongkir: ongkir
        })
    }

    render() {
        const kurir = [
            {
                ongkir: 20000,
                kurir: 'JNE YES',
            },
            {
                ongkir: 20000,
                kurir: 'JNE OKE',
            },

        ]
        return (

            <Card style={{ width: '100%' }}>
                <Card.Content>
                    <Item>
                        <Checkbox style={{ padding: '5px', marginRight: '20px' }} />
                        <Image src={src2} size='mini' verticalAlign='middle' />{' '}
                        <span className='namaPenjual'>Middle Aligned</span>
                    </Item>
                </Card.Content>
                <Card.Content style={{ paddingBottom: '0px' }}>

                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={14}>
                                <ItemBarangCheckout></ItemBarangCheckout>
                                <ItemBarangCheckout></ItemBarangCheckout>
                                <ItemBarangCheckout></ItemBarangCheckout>

                            </Grid.Column>
                            <Grid.Column width={2}>
                                <Dropdown
                                    text={this.state.placeholder}
                                    floating
                                    labeled
                                    button
                                    icon='truck'
                                    className='icon'
                                    style={{ width: '15rem', textAlign: 'center', fontSize: '12px', float: 'right'}}
                                >
                                    <Dropdown.Menu>
                                        <Dropdown.Header icon='truck' content='Jasa Pengiriman' style={{ textAlign: 'center' }} />
                                        <Dropdown.Divider />
                                        {kurir.map((option) =>
                                            <Dropdown.Item description={option.ongkir} text={option.kurir} onClick={() => this.onChangeKurir(option.kurir, option.ongkir)} />
                                        )}

                                    </Dropdown.Menu>
                                </Dropdown>
                                <br></br>
                                <br></br>

                                <Label as='a' color={this.state.color} style={{ float: 'right' }}>Rp.{this.state.ongkir}</Label>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row></Grid.Row>
                    </Grid>
                </Card.Content>



            </Card>

        );
    }
}

export default CardCheckout
