import React from "react";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";
const Tools = () => {
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
                <h1 className="pt-4">Git</h1>
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
        </Col>

        <Col>
          <div
            className="skillprogress my-3"
            border=""
            style={{ width: "35rem" }}
          >
            <Row className="ps-3 text-start ">
              <Col>
                <h1 className="pt-4">Photoshop</h1>
              </Col>
              <Col xs={3}>
                <h1 className="ability">70%</h1>
              </Col>
            </Row>
            <ProgressBar className="skillprogress" variant="success" now={70} />
          </div>

          <div
            className="skillprogress my-3"
            border=""
            style={{ width: "35rem" }}
          >
            <Row className="ps-3 text-start ">
              <Col>
                <h1 className="pt-4">Figma</h1>
              </Col>
              <Col xs={3}>
                <h1 className="ability">70%</h1>
              </Col>
            </Row>
            <ProgressBar className="skillprogress" variant="success" now={70} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Tools;
