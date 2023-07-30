import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function TheNav() {
  return (
    <div>
    <Navbar expand="lg" className="color-one">
      <Container>
        <Navbar.Brand href="#home">Gretchyn Hickman</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Me</Nav.Link>
            <NavDropdown title="My Projects" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Weather App</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Dictionary App
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Old Homepage</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}
