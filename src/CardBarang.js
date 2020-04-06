import React, { Component } from "react";
import "./style.css";
import 'semantic-ui-css/semantic.min.css';
import { Card, Image, Icon, Rating } from 'semantic-ui-react';
import { Link } from "react-router-dom";



class CardBarang extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (

            <Link to={'./FilterLokasi'}>
                <Card link style={{ width: '12rem', height: '16rem', float: 'left', margin: '4px' }}>
                    <Image src='https://www.mainsepeda.com/thumbs/extra-large/uploads/post/2019/09/05/11.png' wrapped ui={false} />
                    <Card.Content>
                        <Card.Header style={{ fontSize: '16px' }}>{this.props.barang.name}</Card.Header>
                        <Card.Description style={{ marginTop: '0px', fontWeight: 'bold', color: '#FA591D' }}>
                            <span className='date'>Rp20.000</span>
                        </Card.Description>
                        <Card.Description>
                            Kota Bandung
                    </Card.Description>
                        <Card.Description style={{ marginTop: '3px' }}>

                        </Card.Description>
                    </Card.Content>
                </Card>

            </Link>



        );
    }
}
export default CardBarang;