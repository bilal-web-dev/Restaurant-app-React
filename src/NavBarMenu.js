import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faList,
  faSearch,
  faAdd,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import React, { useEffect, useState } from "react";

function NavBarMenu() {
  const [login, setLogin] = useState();

  console.warn(localStorage.getItem("login"));

  useEffect(() => {
    if (localStorage.getItem("login")) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, []);

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand>FOOD FUSION</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link>
                <Link to="/" className="aa" style={{ textDecoration: "none" }}>
                  <FontAwesomeIcon icon={faHome} /> Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/list" style={{ textDecoration: "none" }}>
                  <FontAwesomeIcon icon={faList} /> List
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/create" style={{ textDecoration: "none" }}>
                  <FontAwesomeIcon icon={faAdd} /> Create
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link to="/search" style={{ textDecoration: "none" }}>
                  <FontAwesomeIcon icon={faSearch} /> Search
                </Link>
              </Nav.Link>

              {console.warn("i am in return")}

              {login ? (
                <Nav.Link>
                  <Link to="/logout" style={{ textDecoration: "none" }}>
                    <FontAwesomeIcon icon={faUser} /> Logout
                  </Link>
                </Nav.Link>
              ) : (
                <Nav.Link>
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    <FontAwesomeIcon icon={faUser} /> Login
                  </Link>
                </Nav.Link>
              )}
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBarMenu;
