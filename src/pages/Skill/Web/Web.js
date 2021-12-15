import React from "react";
import { Card, Col, Container, ProgressBar, Row } from "react-bootstrap";
import "./Web.css";
const Web = () => {
  return (
    <Container>
      <Row>
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

          <div
            className="skillprogress my-3"
            border=""
            style={{ width: "35rem" }}
          >
            <Row className="ps-3 text-start ">
              <Col>
                <h1 className="pt-4">React Native</h1>
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
                  
                  <div className="skillprogress" border="" style={{ width: "35rem" }}>
            <Row className="ps-3 text-start ">
              <Col>
                <h1 className="pt-4">Vue JS</h1>
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
                <h1 className="pt-4">Node JS</h1>
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
                <h1 className="pt-4">MongoDB</h1>
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
                <h1 className="pt-4">MySQL</h1>
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

export default Web;
