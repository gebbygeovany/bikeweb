import React, { Component } from 'react'
import { Image, Item, Checkbox, Grid, Icon, Dropdown, Label } from 'semantic-ui-react'
import "./style.css";
import CatatanKeranjang from "./CatatanKeranjang";
import JumlahBarangKeranjang from "./JumlahBarangKeranjang";
import ModalHapusKeranjang from "./ModalHapusKeranjang";


class ItemBarangCheckout extends Component {

    constructor(props) {
        super(props)
        this.state = {
            placeholder: 'Pengiriman',
            color: 'transparent',
            ongkir: 0
        }
        // let hapus = new ModalHapusKeranjang();
    }
    onChangeKurir(kurir, ongkir) {
        this.setState({
            placeholder: kurir,
            color: 'blue',
            ongkir: ongkir
        })
    }




    render() {
        const src = 'https://ecs7.tokopedia.net/img/cache/200-square/product-1/2018/11/26/4512003/4512003_a7b282d3-7886-4095-adfa-10f5cd3d20f7_554_554.jpg.webp'
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
            <Item.Group>
                <Item style={{ marginLeft: '20px' }}>
                    <Checkbox style={{ padding: '5px', marginRight: '20px' }} />

                    <Item.Image size='tiny' src={src} />

                    <Item.Content>
                        <Item.Header as='a' style={{ fontSize: '16px', width: '100%' }}>
                            Stang Fatbar Brompton Adventurer

                </Item.Header>
                        {/* <Item.Meta><span className='date'>Rp20.000</span></Item.Meta> */}
                        <Item.Description style={{ fontWeight: 'bold', color: '#FA591D' }}>
                            <span className='date'>Rp20.000</span>
                        </Item.Description>
                        <Item.Extra >
                            <Grid divided='vertically' >
                                <Grid.Row columns={2} style={{ paddingTop: '0px' }}>
                                    <Grid.Column>
                                        <CatatanKeranjang></CatatanKeranjang>
                                    </Grid.Column>
                                    <Grid.Column>
                                        {/* <Dropdown
                                            text={this.state.placeholder}
                                            floating
                                            labeled
                                            button
                                            icon='truck'
                                            className='icon'
                                            style={{ width: '12rem', textAlign: 'center', fontSize: '12px', float: 'right' }}
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

                                        <Label as='a' color={this.state.color} style={{ float: 'right' }}>Rp.{this.state.ongkir}</Label> */}
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>



                        </Item.Extra>
                    </Item.Content>
                </Item>


            </Item.Group>
        )
    }
}





export default ItemBarangCheckout