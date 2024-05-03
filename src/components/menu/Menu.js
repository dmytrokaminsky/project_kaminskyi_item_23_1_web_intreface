import React from 'react';
import { Navbar, Container, Nav} from "react-bootstrap";
const Menu = () => {
 return (
 <Navbar>
 <Container>
 <Navbar.Brand href="/">Energy</Navbar.Brand>
 <Navbar.Toggle />
 <Nav className ="me-auto">
    <Nav.Link href="contact">Contact</Nav.Link>
    <Nav.Link href="/">Home</Nav.Link>
 </Nav>
 <Navbar.Collapse className="justify-content-end">
 <Navbar.Text>
 Signed in as: <a href="#login">Mark Otto</a>
 </Navbar.Text>
 </Navbar.Collapse>
 </Container>
 </Navbar>
 );
};

export default Menu;