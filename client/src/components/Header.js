import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {LinkContainer} from 'react-router-bootstrap';

import {useLocation} from "react-router-dom";

import {FiEdit, FiLogOut} from 'react-icons/fi';
import {MdLogin} from 'react-icons/md';

const Header = () => {

    const location = useLocation()
    const [user, setUser] = useState()

    useEffect(() => {
        if (localStorage.getItem('user') && !user) {
            setUser(JSON.parse(localStorage.getItem('user')))
        }
    }, [location, user])

    return (
        <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
            <Container fluid>
                <LinkContainer to='/'>
                    <Navbar.Brand href="#">MEMORY BOX</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                    <Nav>
                        {
                            user ? (
                                <>
                                    <LinkContainer to='/create'>
                                        <Nav.Link>
                                            <Button variant="outline-light">
                                                <FiEdit className='me-2 mb-1' size={17}/>
                                                Bir anı paylaş
                                            </Button>
                                        </Nav.Link>
                                    </LinkContainer>


                                        <Nav.Link>
                                            <Button variant="outline-light">
                                                <FiLogOut className='me-2 mb-1' size={17}/>
                                                Çıkış Yap
                                            </Button>
                                        </Nav.Link>


                                </>
                            ) : (
                                <LinkContainer to='/auth'>
                                    <Nav.Link>
                                        <Button variant="outline-light">
                                            <MdLogin className='me-2 mb-1' size={20}/>
                                            Giriş Yap
                                        </Button>
                                    </Nav.Link>
                                </LinkContainer>
                            )
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Header;