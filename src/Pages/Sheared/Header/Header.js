import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import Resume from '../../../Files/Md.Rahat_Hossain_Khan_Imon_Resume.pdf';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>

                    <Navbar.Brand as={Link} to="/home" >
                        <span className='site-title' id="">Md. Rahat Hossain Khan Imon</span>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="me-auto">

                        </Nav>

                        <Nav >
                            <Nav.Link as={Link} to="/manageitems" className='header-links fs-5'>Projects</Nav.Link>
                            <Nav.Link as={Link} to="/contact" className='header-links fs-5'>Contact</Nav.Link>


                            <Nav.Link as={Link} to={Resume} target="_blank" download >
                                <span className='fs-5 header-links'>Download Resume</span>
                            </Nav.Link>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;