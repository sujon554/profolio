import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import photo from "../../images/aboutme.jpg";
import './Aboutme.css'
const AboutMe = () => {
  return (
    <Container id="aboutInfo" className="aboutInfo py-5">
          <Row xs={1} md={2}>
          <Col>
          <Image className="AboutmePhoto" sujon src={photo} alt="" fluid />
              </Col>
              
        <Col className="info ps-5">
          <p>
            Hello! i'm Mostofa Sujon, a junior software engineer. I develop web
            application, mobile applications, and desktop applications. My core
            skill is based on JavaScript and I love to do most of the things
            using JavaScript. I love to make the web more open to the world. I
            have graduated with a bachelor's degree in Computer Science
            Engineering from Chandigarh University at Punjab, India in 2020. I
            am available for any kind of job opportunity that suits my
            interests.
          </p>
          <Button className="px-4 py-3 m-4">Get Resume</Button>
          <Button className="px-4 py-3 bg-white text-success">About Me</Button>
        </Col>

        
      </Row>
    </Container>
  );
};

export default AboutMe;
