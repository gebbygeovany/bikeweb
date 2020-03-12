import React, { Component } from "react";
import "./style.css";
import 'semantic-ui-css/semantic.min.css';
import { Grid, Segment, GridColumn, Menu, Checkbox, Form, Button, Dropdown, Icon, Accordion } from 'semantic-ui-react';


class FilterCard extends Component {
    state = { activeIndex: 0 }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }
    state = {}
    handleItemClick = (e, { name }) => this.setState({ activeItem: name });
    render() {
        const { activeIndex } = this.state
        const { activeItem } = this.state
        const friendOptions = [
            {
                key: 'Jenny Hess',
                text: 'Jenny Hess',
                value: 'Jenny Hess',
            },
            {
                key: 'Elliot Fu',
                text: 'Elliot Fu',
                value: 'Elliot Fu',
            },

        ]
        return (
            <div>
                <Menu vertical style={{ width: '16rem' }} >
                    <Menu.Item>
                        <Menu.Header>Kategori</Menu.Header>

                        <Menu.Menu>
                            <Dropdown
                                placeholder='Kategori   '
                                fluid
                                selection
                                options={friendOptions}
                                style={{ marginLeft: '5px', width: '14rem', border: 'none', fontSize: '12px' }}
                            ></Dropdown>
                        </Menu.Menu>
                    </Menu.Item>

                    <Menu.Item>
                        <Menu.Header style={{ marginBottom: '10px' }}>Lokasi</Menu.Header>
                        <Menu.Menu >
                            <div style={{ marginLeft: '15px' }}><Checkbox label='Jakarta' style={{ fontSize: '12px' }} /></div>
                            <div style={{ marginLeft: '15px' }}><Checkbox label='Bandung' style={{ fontSize: '12px' }} /></div>
                            <div style={{ marginLeft: '15px' }}><Checkbox label='Surabaya' style={{ fontSize: '12px' }} /></div>
                            <div style={{ marginLeft: '15px' }}><Checkbox label='Malang' style={{ fontSize: '12px' }} /></div>
                            <Accordion>
                                <Accordion.Title
                                    active={activeIndex === 0}
                                    index={0}
                                    onClick={this.handleClick}
                                    style={{ marginLeft: '15px', fontSize: '12px' }}
                                >
                                    Lainnya
                                </Accordion.Title>
                                <Accordion.Content active={activeIndex === 0}>
                                    <div style={{ marginLeft: '15px' }}><Checkbox label='Jakarta' style={{ fontSize: '12px' }} /></div>
                                    <div style={{ marginLeft: '15px' }}><Checkbox label='Bandung' style={{ fontSize: '12px' }} /></div>
                                    <div style={{ marginLeft: '15px' }}><Checkbox label='Surabaya' style={{ fontSize: '12px' }} /></div>
                                    <div style={{ marginLeft: '15px' }}><Checkbox label='Malang' style={{ fontSize: '12px' }} /></div>
                                </Accordion.Content>

                            </Accordion>
                        </Menu.Menu >



                    </Menu.Item>

                    <Menu.Item>
                        <Menu.Header>Kondisi</Menu.Header>

                        <Menu.Menu >
                            <div style={{ marginLeft: '15px', fontSize: '1px' }}><Checkbox label='Baru' style={{ fontSize: '12px' }} /></div>
                            <div style={{ marginLeft: '15px' }}><Checkbox label='Bekas' style={{ fontSize: '12px' }} /></div>
                        </Menu.Menu>
                    </Menu.Item>

                    <Menu.Item>
                        <Menu.Header style={{ marginBottom: '15px' }}>Harga</Menu.Header>

                        <Menu.Menu style={{ width: '15rem' }}>
                            <Form style={{ marginLeft: '13px' }}>
                                <Form.Field>
                                    <input placeholder='Minimum' type="number" style={{ fontSize: '12px' }}></input>
                                </Form.Field>
                                <Form.Field>
                                    <input placeholder='Maksimum' type="number" style={{ fontSize: '12px' }} />
                                </Form.Field>
                            </Form>
                        </Menu.Menu>
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}
export default FilterCard;