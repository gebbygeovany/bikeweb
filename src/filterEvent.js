import React, { Component } from "react";
import _ from 'lodash'
import "./style.css";
import 'semantic-ui-css/semantic.min.css';
import { Grid, Segment, GridColumn, Menu, Checkbox, Form, Button, Dropdown, Accordion, Icon } from 'semantic-ui-react';
import FilterLokasi from "./FilterLokasi";

class FilterEvent extends Component {
    // state = { activeIndex: 0 }

    

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
        const panels = _.times(3, (i) => ({
            key: `panel-${i}`,
            
          }))
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
                            <Accordion 
                            style={{ marginLeft: '15px', fontSize: '12px' }}
                            defaultActiveIndex={[0, 2]}
                            exclusive={true}
                            
                            >
                                <Accordion.Title
                                    active={activeIndex === 0}
                                    index={0}
                                    onClick={this.handleClick}

                                >
                                    <Icon name='dropdown' />
                                    Jabodetabek
                                </Accordion.Title>
                                <Accordion.Content active={activeIndex === 0}>
                                    <div style={{ marginLeft: '4px' }}><Checkbox label='Jakarta' style={{ fontSize: '12px' }} /></div>
                                    <div style={{ marginLeft: '4px' }}><Checkbox label='Bekasi' style={{ fontSize: '12px' }} /></div>
                                    <div style={{ marginLeft: '4px' }}><Checkbox label='Bogor' style={{ fontSize: '12px' }} /></div>
                                    <div style={{ marginLeft: '4px' }}><Checkbox label='Depok' style={{ fontSize: '12px' }} /></div>
                                </Accordion.Content>

                                <Accordion.Title
                                    active={activeIndex === 1}
                                    index={1}
                                    onClick={this.handleClick}
                                >
                                    <Icon name='dropdown' />
                                    Jawa Barat
                                </Accordion.Title>
                                <Accordion.Content active={activeIndex === 1}>
                                    <div style={{ marginLeft: '4px' }}><Checkbox label='Cirebon' style={{ fontSize: '12px' }} /></div>
                                    <div style={{ marginLeft: '4px' }}><Checkbox label='Bandung' style={{ fontSize: '12px' }} /></div>
                                    <div style={{ marginLeft: '4px' }}><Checkbox label='Garut' style={{ fontSize: '12px' }} /></div>
                                    <div style={{ marginLeft: '4px' }}><Checkbox label='Tasikmalaya' style={{ fontSize: '12px' }} /></div>
                                </Accordion.Content>

                                <Accordion.Title
                                    active={activeIndex === 2}
                                    index={2}
                                    onClick={this.handleClick}
                                >
                                    <Icon name='dropdown' />
                                    Jawa Tengah
                                </Accordion.Title>
                                <Accordion.Content active={activeIndex === 2}>
                                    <div style={{ marginLeft: '4px' }}><Checkbox label='Semarang' style={{ fontSize: '12px' }} /></div>
                                    <div style={{ marginLeft: '4px' }}><Checkbox label='Solo' style={{ fontSize: '12px' }} /></div>
                                    <div style={{ marginLeft: '4px' }}><Checkbox label='Cilacap' style={{ fontSize: '12px' }} /></div>
                                    <div style={{ marginLeft: '4px' }}><Checkbox label='Tegal' style={{ fontSize: '12px' }} /></div>
                                </Accordion.Content>

                                <Accordion.Title
                                    active={activeIndex === 3}
                                    index={3}
                                    onClick={this.handleClick}
                                >
                                    <Icon name='dropdown' />
                                    Jawa Timur
                                </Accordion.Title>
                                <Accordion.Content active={activeIndex === 3}>
                                    <div style={{ marginLeft: '4px' }}><Checkbox label='Surabaya' style={{ fontSize: '12px' }} /></div>
                                    <div style={{ marginLeft: '4px' }}><Checkbox label='Mojokerto' style={{ fontSize: '12px' }} /></div>
                                    <div style={{ marginLeft: '4px' }}><Checkbox label='Kediri' style={{ fontSize: '12px' }} /></div>
                                    <div style={{ marginLeft: '4px' }}><Checkbox label='Malang' style={{ fontSize: '12px' }} /></div>
                                </Accordion.Content>
                            </Accordion>
                        </Menu.Menu >

                        

                    </Menu.Item>

                    <Menu.Item>
                        <Menu.Header>Tanggal</Menu.Header>
                        <Menu.Menu style={{ width: '15rem' }}>
                            <Form style={{ marginLeft: '13px' }}>
                                <Form.Field>
                                    <input placeholder='Minimum' type="date" style={{ fontSize: '12px' }}></input>
                                </Form.Field>
                                <Form.Field>
                                    <input placeholder='Maksimum' type="date" style={{ fontSize: '12px' }} />
                                </Form.Field>
                            </Form>
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
export default FilterEvent;