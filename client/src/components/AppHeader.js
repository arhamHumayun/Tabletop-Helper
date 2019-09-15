import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { Component } from 'react';

export default class AppHeader extends Component {
    render() {
        return (
        <Navbar bg="dark" variant="dark" expand="md">
            <Navbar.Brand href="/Tabletop-Helper/#">Tabletop Helper</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/Tabletop-Helper/#/dice">Roll Dice</Nav.Link>
              <NavDropdown title="Generate Stats" id="basic-nav-dropdown" >
                <NavDropdown.Item href="/Tabletop-Helper/#/generate/dnd">DnD 5e</NavDropdown.Item>
                <NavDropdown.Item href="/Tabletop-Helper/#/generate/coc">Call of Cthulu 7e</NavDropdown.Item>
                <NavDropdown.Item href="/Tabletop-Helper/#/generate/pf">Pathfinder 2e</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="http://chicken-dinner.com/5e/5e-point-buy.html" target="_new">Dnd 5e Point Buy</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/Tabletop-Helper/#/curations">Curations</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="https://github.com/arhamHumayun/Tabletop-Helper" target="_new">My Github</Nav.Link>
              <Nav.Link href="/Tabletop-Helper/#/about" inline>About Me</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
        )
    }
}