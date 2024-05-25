import React, { useContext } from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";
import { UserContext } from '../UserContext'; // Import the UserContext

const Menu = (props) => {
    const { username } = useContext(UserContext); // Use context

    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="/">Energy</Navbar.Brand>
                <Navbar.Toggle />
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="contact">Contact</Nav.Link>
                    <Nav.Link href="login">Log In</Nav.Link>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="#login">{username || 'Guest'}</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;