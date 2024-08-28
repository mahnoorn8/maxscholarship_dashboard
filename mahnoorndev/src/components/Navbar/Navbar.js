import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "./index.css";
import maxLogo from "./assets/max-logo copy.png";

function Navbar() {
  return (
    <Navbar bg="light" expand="lg" variant="light" className="navbar-custom">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={maxLogo}
            width="50px"
            height="48.05px"
            // className="d-inline-block align-top"
            alt="MSF"
          />
        </Navbar.Brand>
        <Nav className="me-auto custom-nav-links">
          <Nav.Link href="/">Scholarships</Nav.Link>
          <Nav.Link href="/">Sponsor</Nav.Link>
          <Nav.Link href="/">Past Winners</Nav.Link>
          <Nav.Link href="/">Financials</Nav.Link>
          <Nav.Link href="/">FAQ</Nav.Link>
        </Nav>
        <Nav className="ms-auto custom-nav-links">
          <Nav.Link href="/">Login</Nav.Link>
        </Nav>
        <Button variant="primary" size="sm">
          Apply
        </Button>
      </Container>
    </Navbar>
  );
}

export default Navbar;
