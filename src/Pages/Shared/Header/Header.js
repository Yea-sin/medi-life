import React from "react";
import "./Header.css";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://i.ibb.co/SR1j4K5/logo.png"
              width="140"
              height="70"
              className="d-inline-block align-top"
              alt="medi-life-logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="d-flex align-items-center ms-auto my-2 my-lg-0 menu"
              style={{ maxHeight: "100px" }}
              navbarScroll>
              <div className="me-3">
                <NavLink
                  activeClassName="activate"
                  as={HashLink}
                  to="/home#home">
                  Home
                </NavLink>
                <NavLink
                  activeClassName="active"
                  as={HashLink}
                  to="/home#services">
                  Services
                </NavLink>
                <NavLink
                  activeClassName="active"
                  as={HashLink}
                  to="/home#about">
                  About
                </NavLink>
              </div>
              <div className="d-flex justify-content-center ms-3">
                <Button variant="outline-success">Sing In</Button>
                <Button variant="outline-info" className="ms-2">
                  Sing Up
                </Button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
