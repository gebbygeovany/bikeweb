import React, { Component } from "react";
import "./style.css";
import 'semantic-ui-css/semantic.min.css';
import { Card, Icon, Rating, Image, Item, Label, Button } from 'semantic-ui-react';
import { Link } from "react-router-dom";



class CardEvent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (

            <Item>
                <Item.Image
                    src={this.props.event.foto}
                    style={{ width: '18rem' }}
                />

                <Item.Content>
                    <Item.Header as='a'>{this.props.event.judul}</Item.Header>
                    <Item.Meta>
                        <span className='cinema'>{this.props.event.tanggal}</span>
                    </Item.Meta>
                    <Item.Meta>
                        <span className='cinema'>{this.props.event.lokasi}</span>
                    </Item.Meta>
                    <Item.Description>
                        {this.props.event.deskripsi}
                    </Item.Description>
                    <Item.Extra>
                        <Label>IMAX</Label>
                        <Label icon='globe' content='Additional Languages' />
                        <Link to={'./DetailEvent'}>

                            <Button secondary floated='right'>
                                Selengkapnya
                            <Icon name='right chevron' />
                            </Button>
                        </Link>

                    </Item.Extra>
                </Item.Content>
            </Item>
        );
    }
}
export default CardEvent;