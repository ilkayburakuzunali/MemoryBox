import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import {LinkContainer} from 'react-router-bootstrap';

const Header = () => {

    return (
        <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
            <Container fluid>
                <LinkContainer to='/'>
                    <Navbar.Brand href="#">MEMORY BOX</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                    <Nav>
                        <LinkContainer to='/create'>
                            <Nav.Link>
                                <Button variant="outline-secondary">
                                    Bir anı paylaş
                                </Button>
                            </Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Header;