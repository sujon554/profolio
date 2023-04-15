import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import photo from "../../images/mosofa.jpg";
import "./About.css";
import Myresume from './MD_MOSTOFA_Resume.fd.pdf'

const About = () => {
  return (
    <Container id="about" className="aboutInfo py-5">
      <Row xs={1} md={2}>
        <Col className="info ps-5">
          <h5>Hello! I am</h5>
          <h1 style={{ fontSize: "4rem" }}>MD. MOSTOFA</h1>

          <h4>Full Stack Developer</h4>
          <h5>Front-end Developer &#9679; Web Developer &#9679;  Software Engineer</h5>
          <Button className="px-4 py-3 m-4 ms-0"><a className="text-white text-decoration-none" href={Myresume} download="MD_MOSTOFA_Resume.fd.pdf">Get Resume</a></Button>
          <Button href="#aboutInfo" className="px-4 py-3 bg-white text-success">
            About Me
          </Button>
        </Col>

        <Col>
          <Image className="profilePhoto" src={photo} alt="" fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
