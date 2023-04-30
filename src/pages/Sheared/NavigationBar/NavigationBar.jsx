import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../Provider/AurtProvider';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    const { user } = useContext(AuthContext)

    return (
        <Container>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link to='/'>Home</Link>
                            <Link to='/'>About</Link>
                            <Link to='/'>Career</Link>
                        </Nav>
                        <Nav>
                            {user &&
                                <Nav.Link> <FaUserCircle /></Nav.Link>
                            }
                            {user ?
                                <Button variant="dark">Log Uot</Button> :
                                <Nav.Link to='/login'>
                                    <Button variant="dark">Login</Button>
                                </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </Container >
    );
};

export default NavigationBar;