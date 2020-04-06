import React, { Component } from 'react'
import { Image, Item, Checkbox, Grid, Icon, Dropdown, Label } from 'semantic-ui-react'
import "./style.css";
import CatatanKeranjang from "./CatatanKeranjang";
import JumlahBarangKeranjang from "./JumlahBarangKeranjang";
import ModalHapusKeranjang from "./ModalHapusKeranjang";


class ItemPelapakCheckout extends Component {

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
const src2 = 'https://i.ya-webdesign.com/images/avatar-png-1.png'


        return (
            <Grid divided='vertically' >
                <Grid.Row columns={2} style={{ paddingTop: '0px' }}>
                    <Grid.Column>
                        <Checkbox style={{ padding: '5px', marginRight: '20px', marginLeft:'10px' }} />
                        <Image src={src2} size='mini' verticalAlign='middle' />{' '}
                        <span className='namaPenjual'>Middle Aligned</span>
                    </Grid.Column>
                    <Grid.Column>
                        <Dropdown
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

                        <Label as='a' color={this.state.color} style={{ float: 'right' }}>Rp.{this.state.ongkir}</Label>
                    </Grid.Column>
                </Grid.Row>
            </Grid>


        )
    }
}





export default ItemPelapakCheckout