import React from 'react';
import { Col, Container, Image, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const {user,logOut}=useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/home">World Tour</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            {user.displayName &&<Nav.Link as={Link} to="/myBooking">My Booking</Nav.Link>}
                            {user.displayName &&<Nav.Link as={Link} to="/manageOrder">Manage Booking</Nav.Link>}
                            {user.displayName &&<Nav.Link as={Link} to="/addservices">Add Services</Nav.Link>}
                            {user.displayName ?
                                <button className="btn btn-dark logout-button" onClick={logOut}>Logout</button>
                                :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }
                            
                        </Nav>
                        <Navbar.Text className="me-2">
                            {user?.displayName}
                        </Navbar.Text>
                        <Row>
                            <Col xs={6} md={4}>
                                <Image className='image' src={user?.photoURL} roundedCircle />
                            </Col>
                        </Row>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;