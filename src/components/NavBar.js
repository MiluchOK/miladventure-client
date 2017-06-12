import React, { Component } from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

class NavBar extends Component{
  render(){
    return(
      <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to='/home'>Miladventure</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <LinkContainer to='/explore'>
            <NavItem eventKey={1}>Explore</NavItem>
          </LinkContainer>

          <NavDropdown eventKey={3} title="Adventure" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>New</MenuItem>
            <MenuItem eventKey={3.2}>Find</MenuItem>
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          <LinkContainer to='/account_settings'>
            <NavItem eventKey={1} href="#">Account Settings</NavItem>
          </LinkContainer>

          <LinkContainer to='/sign_out'>
            <NavItem eventKey={2} href="#">Sign Out</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    )
  }
}

export default NavBar;
