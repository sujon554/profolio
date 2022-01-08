import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import photo from "../../../images/projects/1.jpg";
import photo2 from "../../../images/projects/2.jpg";
import photo3 from "../../../images/projects/3.3.jpg";
import photo4 from "../../../images/projects/4.jpg";
import "./WebProject.css";














const WebProjects = () => {
  return (
    <div className="webProject">
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card class="tileContainer">
            <Card.Img variant="top" src={photo} />
            <Card.Body>
              <Card.Title>Paradise Tour Travel</Card.Title>

              <Button
                href="https://upbeat-bell-7434a8.netlify.app"
                target="_blank"
              >
                Live site
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src={photo2} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src={photo3} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src={photo4} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default WebProjects;
