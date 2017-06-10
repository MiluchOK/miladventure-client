import React, { Component } from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

class NavBar extends Component{
  render(){
    return(
      <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a>Miladventure</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">Explore</NavItem>
          <NavDropdown eventKey={3} title="Adventure" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>New</MenuItem>
            <MenuItem eventKey={3.2}>Find</MenuItem>
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">Account Settings</NavItem>
          <NavItem eventKey={2} href="#">Sign Out</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    )
  }
}

export default NavBar;
