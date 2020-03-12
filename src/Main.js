import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import FilterLokasi from "./FilterLokasi";
import HomeBarang from "./HomeBarang";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import 'semantic-ui-css/semantic.min.css';
import { Icon, Dropdown, Image, Segment, Container, Grid, Header, List, Divider, } from 'semantic-ui-react';
import HomeEvent from "./HomeEvent";
import DetailEvent from "./DetailEvent";
import Footer from "./Footer";
import faker from 'faker'
import { FaShoppingCart, FaBell } from 'react-icons/fa';
import { MdChat } from 'react-icons/md';
import { IoMdBicycle } from 'react-icons/io';
import Comment from "./Comment";



class Main extends Component {
    state = {
        visible: true,
        modalIsOpen: false
    }

    toggleModal() {
        this.setState({
            modalIsOpen: !this.state.modalIsOpen
        });
    }
    render() {
        const options = [
            { key: 'user', text: 'Account', icon: 'user' },
            { key: 'settings', text: 'Settings', icon: 'settings' },
            { key: 'sign-out', text: 'Sign Out', icon: 'sign out' },
        ]
        const trigger = (
            <span>
                <Image avatar src={faker.internet.avatar()} /> {faker.name.findName()}
            </span>
        )
        return (
            <HashRouter>
                <div>

                    <Navbar variant='dark' style={{ height: '5rem' }} className="navbar" fixed="top" color='rgb(206, 206, 206)'>
                        <Navbar.Brand href="#homeBarang" style={{ marginRight: '8px', marginLeft: '50px', marginBottom: '10px' }}>
                            <h1><IoMdBicycle color='rgb(206, 206, 206)'></IoMdBicycle></h1>
                        </Navbar.Brand>
                        <Navbar.Brand href="#homeBarang" style={{ marginRight: '30px',marginTop: '3px'  }}>
                            <div className="logo">GOWES</div>
                        </Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link href="#homeBarang">Shop</Nav.Link>
                            <Nav.Link href="#homeEvent">Event</Nav.Link>
                            <Nav.Link href="">Komunitas</Nav.Link>
                            <Form inline style={{ marginLeft: '55px' }}>
                                <FormControl variant="outline-dark" type="text" placeholder="Search" className="mr-sm-2" style={{ width: '32rem' }}></FormControl>
                                <Button variant="outline-secondary" onClick={this.toggleModal.bind(this)} >Search</Button>
                            </Form>

                            <h5><FaShoppingCart color='grey' style={{ marginLeft: '45px', marginTop: '8px' }}></FaShoppingCart></h5>
                            <h5><FaBell color='grey' style={{ marginLeft: '30px', marginTop: '8px' }}></FaBell></h5>
                            <h5><MdChat color='grey' style={{ marginLeft: '30px ', marginTop: '8px' }}></MdChat></h5>

                            <Dropdown
                                trigger={trigger}
                                options={options}
                                pointing='top left'
                                icon={null}
                                style={{ marginTop: '4px', marginLeft: '3rem', color:'rgb(206, 206, 206)' }}
                            />
                        </Nav>

                    </Navbar>
                    <div className="content">
                        <Route exact path="/homeBarang" component={HomeBarang} />
                        <Route path="/homeEvent" component={HomeEvent} />
                        <Route path="/filterLokasi" component={FilterLokasi} />
                        <Route path="/DetailEvent" component={DetailEvent} />

                    </div>
                    {/* <Comment></Comment> */}
                    <Footer></Footer>
                </div>

                {/* <ModalKeranjang isOpen={this.state.modalIsOpen}></ModalKeranjang> */}


            </HashRouter>
        );
    }
}

export default Main;