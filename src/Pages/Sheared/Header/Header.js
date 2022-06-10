import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import Resume from '../../../Files/Md.Rahat_Hossain_Khan_Imon_Resume.pdf';

const Header = () => {
    return (
        <div className='sticky-top '>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='line'>
                <Container>
                    <Navbar.Brand as={Link} to="/home" >
                        <span className='site-title' id="">Md. Rahat Hossain Khan Imon</span>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="me-auto">

                        </Nav>

                        <Nav >
                            <Nav.Link as={Link} to='/about' className='header-links fs-5 pe-lg-3'>About </Nav.Link>
                            <Nav.Link as={Link} to='/projects' className='header-links fs-5 pe-lg-3'>Projects</Nav.Link>
                            <Nav.Link as={Link} to="/contact" className='header-links fs-5 pe-lg-3'>Contact</Nav.Link>
                            <Nav.Link as={Link} to="/" className='header-links fs-5 pe-lg-3'>Blogs</Nav.Link>


                            <Nav.Link as={Link} to={Resume} target="_blank" download >
                                <span className=' fs-5 header-links pe-lg-3 '> Download Resume </span>
                            </Nav.Link>

                        </Nav>

                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div >
    );
};

export default Header;