import React from "react";
import { Container, Navbar } from "react-bootstrap";

function Nav() {
  return (
    <div>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/7615/7615515.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            MovieFinder
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Nav;
