import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';
import '../assets/css/nav.css'

const NavApp = () => {

    return (
        <>
            <Navbar collapseOnSelect className='Nav' bg='dark' expand='md' sticky='top'>
                    <Navbar.Brand as={Link} to='/' className='brand'>
                        <Container className='title'>Crafty <span className='title2'>Dezignz</span></Container>
                    </Navbar.Brand>
                    <Container className='nav-container'>
                    <Navbar.Toggle className='nav-button' aria-controls='navbar' />
                    <Navbar.Collapse className='nav-collapse' id='navbar'>
                        <Nav className='nav-links ml-auto'>
                            <>
                                <Nav.Link as={Link} to='/'>
                                    Paintings
                                </Nav.Link>
                                <Nav.Link as={Link} to='/'>
                                    Cross-stitch
                                </Nav.Link>
                                <Nav.Link as={Link} to='/'>
                                    Custom Coasters
                                </Nav.Link>
                                <Nav.Link as={Link} to='/'>
                                    Custom Order
                                </Nav.Link>
                            </>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
};

export default NavApp