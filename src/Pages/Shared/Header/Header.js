import React from "react";
import "./Header.css";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { useHistory } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import { Link } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  const handleSingIn = () => {
    history.push("/singIn");
  };
  const handleSingUp = () => {
    history.push("/singUp");
  };
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/home">
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
              className="d-flex align-items-center ms-auto my-2 my-lg-0 "
              style={{ maxHeight: "100px" }}
              navbarScroll>
              <div className="me-3 menu">
                <Nav.Link as={HashLink} to="/home#home">
                  Home
                </Nav.Link>
                <Nav.Link as={HashLink} to="/home#services">
                  Services
                </Nav.Link>
                <Nav.Link as={HashLink} to="/departments">
                  Departments
                </Nav.Link>
                <Nav.Link as={HashLink} to="/doctors">
                  Doctors
                </Nav.Link>
              </div>
              {user?.email ? (
                <div className="d-flex align-items-center">
                  <Button onClick={() => logOut()} variant="outline-primary">
                    Sing Out
                  </Button>
                  <small className="ms-2">{user.displayName}</small>
                  <img
                    src={user.photoURL}
                    style={{ borderRadius: "50%" }}
                    width="50px"
                    alt=""
                  />
                </div>
              ) : (
                <div className="d-flex justify-content-center ms-3">
                  <Button
                    onClick={() => handleSingIn()}
                    variant="outline-success">
                    Sing In
                  </Button>
                  <Button
                    onClick={() => handleSingUp()}
                    variant="outline-info"
                    className="ms-2">
                    Sing Up
                  </Button>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
