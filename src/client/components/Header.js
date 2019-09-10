import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

const Header = (props) => {
  return(
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">Drawer Component</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavDropdown eventKey={1} title="Demo" id="redux-form-nav">
            <MenuItem eventKey={1.1} href="/drawers">drawers</MenuItem>
          </NavDropdown>          
        </Nav>        
      </Navbar.Collapse>
    </Navbar>
  )
}
export default Header;


