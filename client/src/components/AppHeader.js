import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { Component } from 'react';

class AppHeader extends Component {
    render() {
        return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Tabletop Helper</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#dice">Roll Dice</Nav.Link>
              <NavDropdown title="Generate Stats" id="basic-nav-dropdown">
                <NavDropdown.Item href="#generate/dnd">DnD 5e</NavDropdown.Item>
                <NavDropdown.Item href="#generate/coc">Call of Cthulu 7e</NavDropdown.Item>
                <NavDropdown.Item href="#generate/pf">Pathfinder 2e</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#pointbuy/dnd">Dnd 5e Point Buy</NavDropdown.Item>
              </NavDropdown>
            </Nav>
        </Navbar>
        )
    }
}

export default AppHeader;