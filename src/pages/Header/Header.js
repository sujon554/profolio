import React from "react";
import { Container, Nav, Navbar, NavLink } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar className="px-5 "  sticky="top" expand="md">
      <Container>
        <Navbar.Brand href="#" className="text-light">MOSTOFA</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="bg-light" />
        <Navbar.Collapse id="navbarScroll" >
          <Nav
            className="ms-auto  my-2 my-lg-0"
            navbarScroll
          >
            <NavLink href="#aboutInfo" className="text-light">ABOUT</NavLink>
            <Nav.Link href="#skillIcon" className="text-light">SKILL</Nav.Link>
            <Nav.Link href="#swiperSlider" className="text-light">PROTFOLIO</Nav.Link>
            <Nav.Link href="#contacts" className="text-light">CONTACTS</Nav.Link>
            {/* <Nav.Link href="#action2" className="text-light">BLOG</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
