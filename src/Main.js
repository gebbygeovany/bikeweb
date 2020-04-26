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
import LandingPage from "./LandingPage";
import PembelianEvent from "./PembelianEvent";
import PembayaranEvent from "./PembayaranEvent";
import Keranjang from "./Keranjang";
import CheckoutBarang from "./CheckoutBarang";
import InputEvent from "./InputEvent";
import InputBarang from "./InputBarang";
import Profile from "./Profile";
import Footer from "./Footer";
import faker from 'faker'
import { FaShoppingCart, FaBell } from 'react-icons/fa';
import { MdChat } from 'react-icons/md';
import { IoMdBicycle } from 'react-icons/io';


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
                        <Navbar.Brand href="#landingPage" style={{ marginRight: '8px', marginLeft: '50px', marginBottom: '10px' }}>
                            <h1><IoMdBicycle color='rgb(206, 206, 206)'></IoMdBicycle></h1>
                        </Navbar.Brand>
                        <Navbar.Brand href="#landingPage" style={{ marginRight: '30px', marginTop: '3px' }}>
                            <div className="logo">GOWES</div>
                        </Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link href="#homeBarang">Shop</Nav.Link>
                            <Nav.Link href="#homeEvent">Event</Nav.Link>
                            <Nav.Link href="#profile">Komunitas</Nav.Link>
                            <Form inline style={{ marginLeft: '50px', width:'auto'}}>
                                <FormControl variant="outline-dark" type="text" placeholder="Search" className="mr-sm-2" style={{ width: '32rem' }}></FormControl>
                                <Button variant="outline-secondary" onClick={this.toggleModal.bind(this)} >Search</Button>
                            </Form>
                            <Nav.Link  href="#Keranjang">
                                <h5><FaShoppingCart color='grey' style={{ marginLeft: '30px', marginTop: '3px' }}></FaShoppingCart></h5>
                            </Nav.Link>

                            <Nav.Link href="#inputEvent">
                                <h5><FaBell color='grey' style={{ marginLeft: '10px', marginTop: '3px' }}></FaBell></h5>
                            </Nav.Link>

                            <Nav.Link href="#inputBarang">
                                <h5><MdChat color='grey' style={{ marginLeft: '10px ', marginTop: '3px' }}></MdChat></h5>
                            </Nav.Link>


                            <Dropdown
                                trigger={trigger}
                                options={options}
                                pointing='top left'
                                icon={null}
                                style={{ marginTop: '4px', marginLeft: '30px', color: 'rgb(206, 206, 206)' }}
                            />
                        </Nav>

                    </Navbar>
                    <div className="content">
                        <Route exact path="/homeBarang" component={HomeBarang} />
                        <Route path="/homeEvent" component={HomeEvent} />
                        <Route path="/filterLokasi" component={FilterLokasi} />
                        <Route path="/DetailEvent" component={DetailEvent} />
                        <Route path="/PembelianEvent" component={PembelianEvent} />
                        <Route path="/PembayaranEvent" component={PembayaranEvent} />
                        <Route path="/Keranjang" component={Keranjang} />
                        <Route path="/CheckoutBarang" component={CheckoutBarang} />
                        <Route path="/LandingPage" component={LandingPage} />
                        <Route path="/InputEvent" component={InputEvent} />
                        <Route path="/InputBarang" component={InputBarang} />
                        <Route path="/Profile" component={Profile} />


                    </div>
                    <Footer></Footer>
                </div>



            </HashRouter>
        );
    }
}

export default Main;