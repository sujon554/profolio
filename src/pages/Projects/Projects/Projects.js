import React from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import OthersProjects from "../OthersProject/OthersProjects";
import PSD from "../PSD/PSD";
import WebProjects from "../Web/WebProjects";

const Projects = () => {
  return (
    <Container>
      <Tabs
        defaultActiveKey="webprojects"
        id="controlled-tab-example"
        // activeKey={key}
        // onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="webprojects" title="Web">
          <WebProjects />
        </Tab>
        <Tab eventKey="psd" title="PSD Templates">
          <PSD />
        </Tab>

        <Tab eventKey="others" title="Others">
          <OthersProjects />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Projects;
