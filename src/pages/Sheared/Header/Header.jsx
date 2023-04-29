import React from 'react';
import moment from 'moment';
import { Container, Button, Navbar, Nav } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Container>
            <div className="text-center">
                <h1 className='pt-4'>The News Times</h1>
                <p>Lorem ipsum dolor sit amet.</p>
                <p className="text-bold">{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex bg-light mb-3 rounded p-2'>
                <Button className='me-2' variant="danger">Danger</Button>
                <Marquee speed={100} pauseOnHover={true}>
                    I can be a React component, multiple React components, or just some text.I can be a React component, multiple React components, or just some text.I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>

            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link><Link to='/'>Home</Link></Nav.Link>
                            <Nav.Link><Link to='/'>About</Link></Nav.Link>
                            <Nav.Link><Link to='/'>Career</Link></Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Profile</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <Button variant="dark">Dark</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;