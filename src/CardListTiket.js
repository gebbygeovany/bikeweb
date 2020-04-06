import React, { Component } from "react";
import "./style.css";
import 'semantic-ui-css/semantic.min.css';
import { Card, Item, Button, Icon, Label } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import { FiPlusCircle } from 'react-icons/fi';



class CardListTiket extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <Card style={{ width: '100%' }}>
                <Card.Content>
                    <Item.Group divided>


                        <Item >
                            <Item.Image
                                src='https://miro.medium.com/max/1424/1*sHmqYIYMV_C3TUhucHrT4w.png'
                                style={{ width: '5rem', marginTop: '10px', marginLeft: '8px' }}
                            />

                            <Item.Content>
                                <Item.Header as='a' style={{ marginTop: '5px' }}>{this.props.tiket.jenis}</Item.Header>
                                <Item.Meta>
                                    <span className='cinema'>IFC Cinema</span>
                                </Item.Meta>
                                <Item.Description>100% pendapatan dari tiket ini akan diperuntukkan kepada musisi jalanan.</Item.Description>
                                <Item.Extra>
                                    <Button primary floated='right'>
                                        {this.props.tiket.jenis}
                                    </Button>
                                    
                                    <Label>
                                        <Icon name='calendar alternate outline' /> 12 September 2020
                                    </Label>
                                </Item.Extra>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Card.Content>
            </Card >
        );
    }
}
export default CardListTiket;