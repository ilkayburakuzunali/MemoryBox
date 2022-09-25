import React, {useState, useEffect} from 'react';
import {useDispatch} from "react-redux";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {LinkContainer} from 'react-router-bootstrap';

import {useLocation, useNavigate} from "react-router-dom";

import {FiEdit, FiLogOut} from 'react-icons/fi';
import {MdLogin} from 'react-icons/md';

import {logout} from "../actions/userActions";


const Header = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()
    const [user, setUser] = useState()

    const exit = async (id) => {
        await dispatch(logout(id))
        setUser(null)
        navigate('/')
    }

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
                                        <Button
                                            onClick={(e) => {
                                                exit(user.user._id)
                                            }}
                                            variant="outline-danger">
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