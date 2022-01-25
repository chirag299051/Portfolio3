import React from "react";
import logo from "./assets/c.png";
import { Navbar, Nav, Container } from "react-bootstrap";

const MainNavbar = () => {
  const icon = {
    borderRadius: "50%",
    height: "90px",
    width: "90px",
  };

  return (
    <Navbar bg="transparent" className="main-navbar" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} style={icon} className="icon" href="#" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            style={{ fontSize: "1.2em", color: "color: #d6dcff" }}
            className="ms-auto"
          >
            <Nav.Link className="hvr-underline-from-left" href="#about">
              About
            </Nav.Link>
            <Nav.Link className="hvr-underline-from-left" href="#projects">
              Projects
            </Nav.Link>
            <Nav.Link className="hvr-underline-from-left" href="#contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
