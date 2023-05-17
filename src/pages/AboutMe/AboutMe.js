import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './Aboutme.css'
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
           I'm Front-End Developer from 1.5 Years in Bangladesh.I Have Completed my Graduation in the field of Computer Science and Engineering(CSE) from of the renowned University in Dhaka. Which is Bangladesh University of Business and Technology(BUBT). <br/><br/>
           
           As a passionate Developer and long-time worked-in front-end development. I am confident in front-end technologies like JavaScript, react, next, redux, tailwind, bootstrap, material UI, firebase, git, Github, netlify and other also knowledge NodeJS, MongoDB, Express, devTool, JWT and others. I love to make the web more open to the world. I
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
