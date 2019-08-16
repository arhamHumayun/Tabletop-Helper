import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { Component } from 'react';

export default class AppHeader extends Component {
    render() {
        return (
        <Navbar bg="dark" variant="dark" expand="md">
            <Navbar.Brand href="/">Tabletop Helper</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/dice">Roll Dice</Nav.Link>
              <NavDropdown title="Generate Stats" id="basic-nav-dropdown">
                <NavDropdown.Item href="/generate/dnd">DnD 5e</NavDropdown.Item>
                <NavDropdown.Item href="/generate/coc">Call of Cthulu 7e</NavDropdown.Item>
                <NavDropdown.Item href="/generate/pf">Pathfinder 2e</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/pointbuy/dnd">Dnd 5e Point Buy</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/curations">Curations</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/about" inline>About</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
        )
    }
}