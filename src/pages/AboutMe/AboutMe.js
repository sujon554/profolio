import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import './Aboutme.css'
import Myresume from './MD_MOSTOFA_Resume.fd.pdf';
import tailwind from "../../images/icon/tailwind.png";
const AboutMe = () => {
  return (
    <Container id="aboutInfo" className="aboutInfo py-5">
          <Row xs={1} md={2}>
          <Col>


<div className="animation">
<div className="box">
    <div>
      <span><i className="fab fa-react"></i></span>
      <span><i className="fab fa-js"></i></span>
      <span><i className="fab fa-css3-alt"></i></span>
      <span> <img width={75} src={tailwind} alt="" /></span>
    </div>
  </div>
</div>


              </Col>
              
        <Col className="info ps-5">
          <p>
            Hello ! I'm Mostofa Sujon, a junior software engineer. I develop web
            application, mobile applications, and desktop applications. My core
            skill is based on JavaScript and I love to do most of the things
            using JavaScript. I love to make the web more open to the world. I
            have graduated with a bachelor's degree in Computer Science
            Engineering from Chandigarh University at Punjab, India in 2020. I
            am available for any kind of job opportunity that suits my
            interests.
          </p>
         
         <h3 className="mb-0 mt-5">FOLLOW ME</h3>
          <a
            href="https://github.com/sujon554?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/sujon554/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>

          <a
            href="https://www.facebook.com/sujon554/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>

          <a
            href="https://twitter.com/sujon554"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </Col>

        
      </Row>
    </Container>
  );
};

export default AboutMe;
