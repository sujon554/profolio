import React from "react";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import "./Skill.css";

const Skill = () => {
  return (
    <Container className="py-5">

    <Row>
      <Col>
        <div
          className="skillprogress my-3 rounded"
          border=""
          style={{ width: "35rem" }}
        >
          <Row className="ps-3 text-start ">
            <Col>
              <h1 className="pt-4">JavaScript</h1>
            </Col>
            <Col xs={3}>
              <h1 className="ability">90%</h1>
            </Col>
          </Row>
          <ProgressBar
            className="skillprogress my-3"
            variant="success"
            now={90}
          />
        </div>

       

        <div
          className="skillprogress my-3"
          border=""
          style={{ width: "35rem" }}
        >
          <Row className="ps-3 text-start ">
            <Col>
              <h1 className="pt-4">Node JS</h1>
            </Col>
            <Col xs={3}>
              <h1 className="ability">60%</h1>
            </Col>
          </Row>
          <ProgressBar
            className="skillprogress my-3"
            variant="success"
            now={60}
          />
                </div>


                <div
          className="skillprogress my-3"
          border=""
          style={{ width: "35rem" }}
        >
          <Row className="ps-3 text-start ">
            <Col>
              <h1 className="pt-4">Express JS</h1>
            </Col>
            <Col xs={3}>
              <h1 className="ability">70%</h1>
            </Col>
          </Row>
          <ProgressBar
            className="skillprogress my-3"
            variant="success"
            now={70}
          />
        </div>

                
                <div className="skillprogress" border="" style={{ width: "35rem" }}>
          <Row className="ps-3 text-start ">
            <Col>
              <h1 className="pt-4">MongoDB</h1>
            </Col>
            <Col xs={3}>
              <h1 className="ability">30%</h1>
            </Col>
          </Row>
          <ProgressBar
            className="skillprogress my-3"
            variant="success"
            now={30}
          />
        </div>

        <div className="skillprogress" border="" style={{ width: "35rem" }}>
          <Row className="ps-3 text-start ">
            <Col>
              <h1 className="pt-4">Git & Yarn</h1>
            </Col>
            <Col xs={3}>
              <h1 className="ability">30%</h1>
            </Col>
          </Row>
          <ProgressBar
            className="skillprogress my-3"
            variant="success"
            now={30}
          />
        </div>

        <div className="skillprogress" border="" style={{ width: "35rem" }}>
          <Row className="ps-3 text-start ">
            <Col>
              <h1 className="pt-4">Debug & Tools</h1>
            </Col>
            <Col xs={3}>
              <h1 className="ability">30%</h1>
            </Col>
          </Row>
          <ProgressBar
            className="skillprogress my-3"
            variant="success"
            now={30}
          />
        </div>


      </Col>

      <Col>
        <div
          className="skillprogress my-3"
          border=""
          style={{ width: "35rem" }}
        >
          <Row className="ps-3 text-start ">
            <Col>
              <h1 className="pt-4">React</h1>
            </Col>
            <Col xs={3}>
              <h1 className="ability">80%</h1>
            </Col>
          </Row>
          <ProgressBar className="skillprogress" variant="success" now={80} />
        </div>

        <div className="skillprogress" border="" style={{ width: "35rem" }}>
          <Row className="ps-3 text-start ">
            <Col>
              <h1 className="pt-4">Redux</h1>
            </Col>
            <Col xs={3}>
              <h1 className="ability">90%</h1>
            </Col>
          </Row>
          <ProgressBar
            className="skillprogress my-3"
            variant="success"
            now={90}
          />
        </div>

        <div className="skillprogress" border="" style={{ width: "35rem" }}>
          <Row className="ps-3 text-start ">
            <Col>
              <h1 className="pt-4">Tailwind CSS</h1>
            </Col>
            <Col xs={3}>
              <h1 className="ability">70%</h1>
            </Col>
          </Row>
          <ProgressBar
            className="skillprogress my-3"
            variant="success"
            now={70}
          />
        </div>

        <div className="skillprogress" border="" style={{ width: "35rem" }}>
          <Row className="ps-3 text-start ">
            <Col>
              <h1 className="pt-4">Matrial UI</h1>
            </Col>
            <Col xs={3}>
              <h1 className="ability">70%</h1>
            </Col>
          </Row>
          <ProgressBar
            className="skillprogress my-3"
            variant="success"
            now={70}
          />
        </div>

        <div className="skillprogress" border="" style={{ width: "35rem" }}>
          <Row className="ps-3 text-start ">
            <Col>
              <h1 className="pt-4">Bootstrap</h1>
            </Col>
            <Col xs={3}>
              <h1 className="ability">70%</h1>
            </Col>
          </Row>
          <ProgressBar
            className="skillprogress my-3"
            variant="success"
            now={70}
          />
        </div>

        <div className="skillprogress" border="" style={{ width: "35rem" }}>
          <Row className="ps-3 text-start ">
            <Col>
              <h1 className="pt-4">HTML & CSS</h1>
            </Col>
            <Col xs={3}>
              <h1 className="ability">70%</h1>
            </Col>
          </Row>
          <ProgressBar
            className="skillprogress my-3"
            variant="success"
            now={70}
          />
        </div>


      
      </Col>
    </Row>
  </Container>
  );
};

export default Skill;
