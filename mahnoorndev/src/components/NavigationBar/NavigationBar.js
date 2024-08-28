import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "./NavigationBar.css";
import maxLogo from "../../assets/img.png";

function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg" variant="light" className="navbar-custom">
      <Container>
        <Navbar.Brand href="home">
          <img
            src={maxLogo}
            width="50px"
            height="48.05px"
            className="d-inline-block align-top"
            alt="MSF"
          />
        </Navbar.Brand>

        {/* Responsive Collapse Button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navbar Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto custom-nav-links">
            <Nav.Link href="/scholarships">Scholarships</Nav.Link>
            <Nav.Link href="/sponsor">Sponsor</Nav.Link>
            <Nav.Link href="/past-winners">Past Winners</Nav.Link>
            <Nav.Link href="/financials">Financials</Nav.Link>
            <Nav.Link href="/faq">FAQ</Nav.Link>
          </Nav>
          <Nav className="ms-auto custom-nav-links">
            <Nav.Link href="/">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {/* Apply Button */}
        <Button variant="primary" size="sm">
          Apply
        </Button>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
