import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import photo from "../../images/aboutme.jpg";
import './Aboutme.css'
import Myresume from './MD_MOSTOFA_Resume.fd.pdf';
import tailwind from "../../images/icon/tailwind.png";
const AboutMe = () => {
  return (
    <Container id="aboutInfo" className="aboutInfo py-5">
          <Row xs={1} md={2}>
          <Col>
          {/* <Image className="AboutmePhoto" sujon src={photo} alt="" fluid /> */}


<div className="animation">
<div className="box">
    <div>
      <span><i class="fab fa-react"></i></span>
      <span><i class="fab fa-js"></i></span>
      <span><i class="fab fa-css3-alt"></i></span>
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
          <Button className="px-4 py-3 m-4 "><a className="text-white text-decoration-none" href={Myresume} download="MD_MOSTOFA_Resume.fd.pdf">Get Resume</a></Button>
          <Button className="px-4 py-3 bg-white text-success">About Me</Button>
        </Col>

        
      </Row>
    </Container>
  );
};

export default AboutMe;
