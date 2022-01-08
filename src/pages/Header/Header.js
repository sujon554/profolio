import React from "react";
import { Container, Nav, Navbar, NavLink } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar className="px-5" expand="md">
      <Container>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto  my-2 my-lg-0 bg-light"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink href="#action1">ABOUT</NavLink>
            <Nav.Link href="#action2">SKILL</Nav.Link>
            <Nav.Link href="#action2">PROTFOLIO</Nav.Link>
            <Nav.Link href="#action2">CONTACTS</Nav.Link>
            <Nav.Link href="#action2">BLOG</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
