import React from "react";
import { Container, Figure, Image, Row } from "react-bootstrap";

import express from "../../images/icon/express (2).png";
import tailwind from "../../images/icon/tailwind.png";
import material from "../../images/icon/material.png";
// import native from "../../images/icon/native.png";
import mongodb from "../../images/icon/mongodb.png";
import mysql from "../../images/icon/mysql.png";
import ps from "../../images/icon/ps.png";
import firebase from "../../images/icon/firebase.png";

const SkillIcon = () => {
  return (
    <Container>
      <Row>
        <h1>My Skill's</h1>
        <div className="d-flex flex-row bd-highlight justify-content-center align-items-center mb-3">
          <div className="p-2">
            <h1>
              <i class="fab fa-react"></i>
            </h1>
            <Figure>React</Figure>
          </div>
          {/* <div className="p-2">
            <h1>
              <i class="fab fa-vuejs"></i>
            </h1>
            <Figure>Vue JS</Figure>
          </div>
          <div className="p-2">
            <h1>
              <i class="fab fa-react"></i>
            </h1>
            <Figure>Native</Figure>
          </div> */}
          <div className="p-2">
            <h1>
              <img src={material} alt="" />
            </h1>
            <Figure>Material UI</Figure>
          </div>
          <div className="p-2">
            <h1>
              <img src={tailwind} alt="" />
            </h1>
            <Figure>Tailwind CSS</Figure>
          </div>

          <div className="p-2">
            <h1>
              <i class="fab fa-bootstrap"></i>
            </h1>
            <Figure>Bootstrap</Figure>
          </div>
          <div className="p-2">
            <h1>
              <i class="fab fa-sass"></i>
            </h1>
            <Figure>sass</Figure>
          </div>
        

          <div className="p-2">
            <h1>
              <i class="fab fa-css3-alt"></i>
            </h1>
            <Figure>CSS</Figure>
          </div>

          <div className="p-2">
            <h1>
              <i class="fab fa-html5"></i>
            </h1>
            <Figure>HTML</Figure>
          </div>
        </div>

        <hr />

        <div className="d-flex flex-row bd-highlight justify-content-center align-items-center mb-3">
          <div className="p-2">
            <h1>
              <i class="fab fa-js"></i>
            </h1>
            <Figure>JavaScript</Figure>
          </div>

          {/* <div className="p-2">
            <h1>
              <i class="fab fa-java"></i>
            </h1>
            <Figure>Java</Figure>
          </div>
          <div className="p-2">
            <h1>
              <i class="fab fa-python"></i>
            </h1>
            <Figure>Python</Figure>
          </div>
          <div className="p-2">
            <h1>
              <i class="fab fa-cuttlefish"></i>
            </h1>
            <Figure>C</Figure>
          </div> */}
          <div className="p-2">
            <h1>
              <i class="fab fa-node-js"></i>
            </h1>
            <Figure>Node JS</Figure>
          </div>

          <div className="p-2">
            <h1>
              <Image src={express} />
            </h1>
            <Figure>Express</Figure>
          </div>
          <div className="p-2">
            <h1>
              <Image src={firebase} />
            </h1>
            <Figure>Firebase</Figure>
          </div>

          <div className="p-2">
            <h1>
              <Image src={mongodb} />
            </h1>
            <Figure>MongoDB</Figure>
          </div>
          {/* <div className="p-2">
            <h1>
              <Image src={mysql} />
            </h1>
            <Figure>MySQL</Figure>
          </div> */}

          <div className="p-2">
            <h1>
              <i class="fab fa-git-alt"></i>
            </h1>
            <Figure>Git</Figure>
          </div>

          <div className="p-2">
            <h1>
              <i class="fab fa-github"></i>
            </h1>
            <Figure>Github</Figure>
          </div>
          <div className="p-2">
            <h1>
              <i class="fab fa-yarn"></i>
            </h1>
            <Figure>Yarn</Figure>
          </div>
          <div className="p-2">
            <h1>
              <i class="fab fa-npm"></i>
            </h1>
            <Figure>NPM</Figure>
          </div>
         

          {/* <div className="p-2">
            <h1>
              <img src={ps} alt="" />
            </h1>
            <Figure>Figma</Figure>
          </div>
          <div className="p-2">
            <h1>
              <i class="fab fa-figma"></i>
            </h1>
            <Figure>Figma</Figure>
          </div> */}
        </div>
      </Row>
    </Container>
  );
};

export default SkillIcon;
