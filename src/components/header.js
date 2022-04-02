import React from "react"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import logo from "../images/logo.svg"

const Header = () => (
  <div className="container">
    <Navbar expand="lg">
      <Navbar.Brand href="/oal-website-en">
        <img
          src={logo}
          width="200px"
          className="d-inline-block align-top"
          alt="Oak and Lotus logo"
          style={{ margin: 0 }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/oal-website-en">Home</Nav.Link>
          <NavDropdown title="Portfolio" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              Management Consulting
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Human Resources
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              Project Consulting
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
)

export default Header
