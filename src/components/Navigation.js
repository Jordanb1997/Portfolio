import React from 'react';
import '../style/Navigation.css'
import { Nav, Navbar } from "react-bootstrap";

function Navigation() {
    return (
        <Navbar collapseOnSelect expand="sm" fixed="top" className="nav">
            <Navbar.Brand id="navlink" href="#about">Jordan Bannister</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"
                className="toggler" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto"></Nav>
                <Nav>
                    <Nav.Link id="navlink" href="#aboutme">About Me</Nav.Link>
                    <Nav.Link id="navlink" href="#myprojects">Projects</Nav.Link>
                    <Nav.Link id="navlink" href="#frontend">Skills</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;