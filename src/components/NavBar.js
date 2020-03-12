import React from 'react'
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown, Image } from 'react-bootstrap';
import styled from 'styled-components';

import user from '../assets/profile.jpg'

import { faBell, faUser, faBiking } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }

  a, .navbar-brand, .navbar-nav .nav-link {
    font-size:large;
    font-weight:bold;
    color: #bbb;

    &:hover {
      text-decoration: none;
      color: white;
    }
  }

  .top-menu, .side-menu {
    margin: 0px 30px;
  }

  .nav-title {
    font-size:25px;
  }
`;

export const NavBar = () => (
  <Styles>
    <Navbar expand="lg" fixed="top">
      <Navbar.Brand className="nav-title">
        <FontAwesomeIcon icon={faBiking} />
        {' '}
        GOWES
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item className="top-menu">
            <Nav.Link>
              <Link to="/">HOME</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="top-menu">
            <Nav.Link>
              <Link to="/faq">FAQ</Link>
            </Nav.Link>
          </Nav.Item>
          <NavDropdown title="EXPLORE" className="top-menu">
            <NavDropdown.Item>
              <Link to="/">EXPLORE</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/explore">KOMUNITAS</Link>
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Item className="top-menu">
            <Nav.Link>
              <Link to="/marketplace">MARKETPLACE</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Nav className="ml-auto">
          <Navbar.Brand className="side-menu">
            <a href="">
              <FontAwesomeIcon icon={faBell} />
              <span>&nbsp;&nbsp;</span>
              Notification
            </a>
          </Navbar.Brand>
          <Navbar.Brand className="side-menu">
            <a href="">
              <Image src={user} width={30} height={30} roundedCircle />
              <span>&nbsp;&nbsp;</span>
              User
            </a>
          </Navbar.Brand>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <br></br><br></br><br></br>
  </Styles >
)