import React, { Component } from 'react'
import { Image, Item, Checkbox, Grid, Icon } from 'semantic-ui-react'
import "./style.css";
import CatatanKeranjang from "./CatatanKeranjang";
import JumlahBarangKeranjang from "./JumlahBarangKeranjang";
import ModalHapusKeranjang from "./ModalHapusKeranjang";


class ItemBarangKeranjang extends Component {

    constructor(props) {
        super(props)
        // let hapus = new ModalHapusKeranjang();
    }



    render() {
        const src = 'https://ecs7.tokopedia.net/img/cache/200-square/product-1/2018/11/26/4512003/4512003_a7b282d3-7886-4095-adfa-10f5cd3d20f7_554_554.jpg.webp'

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
                                <Grid.Row columns={3} style={{ paddingTop: '0px' }}>
                                    <Grid.Column>
                                        <CatatanKeranjang></CatatanKeranjang>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Icon
                                            name='trash alternate disabled'
                                            size='large'
                                            style={{ marginRight: '30px', marginTop: '5px', marginLeft: '160px' }}
                                            // onClick={this.hapus.show('mini')}
                                        >
                                        </Icon>

                                    </Grid.Column>
                                    <Grid.Column>
                                        <JumlahBarangKeranjang floated='right'></JumlahBarangKeranjang>
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





export default ItemBarangKeranjang