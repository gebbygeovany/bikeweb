import React, { Component } from "react";
import { Card, Icon, Item, Image, Checkbox } from 'semantic-ui-react'
import ItemBarangKeranjang from "./ItemBarangKeranjang";


const description = [
    'Amy is a violinist with 2 years experience in the wedding industry.',
    'She enjoys the outdoors and currently resides in upstate New York.',
].join(' ')
const src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/16777216colors.png/220px-16777216colors.png'
const src2 = 'https://i.ya-webdesign.com/images/avatar-png-1.png'

class CardKeranjang extends Component {
    constructor(props) {
        super(props);
    }
    render() {
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
                    <ItemBarangKeranjang></ItemBarangKeranjang>
                </Card.Content>
                <Card.Content style={{ paddingBottom: '0px' }}>
                    <ItemBarangKeranjang></ItemBarangKeranjang>
                </Card.Content>
                <Card.Content style={{ paddingBottom: '0px' }}>
                    <ItemBarangKeranjang></ItemBarangKeranjang>
                </Card.Content>


            </Card>

        );
    }
}

export default CardKeranjang
