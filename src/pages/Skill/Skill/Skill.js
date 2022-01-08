import { Container, Tab, Tabs } from "react-bootstrap";
import Others from "../Others/Others";
import Programming from "../Programming/Programming";
import Tools from "../Tools/Tools";
import Web from "../Web/Web";

const Skill = () => {
  // const [key, setKey] = useState("home");
  return (
    <Container className="py-5">
      <Tabs defaultActiveKey="web" id="controlled-tab-example" className="mb-3">
        <Tab eventKey="web" title="Web">
          <Web />
        </Tab>
        <Tab eventKey="programming" title="Programming">
          <Programming />
        </Tab>
        <Tab eventKey="tools" title="Tools">
          <Tools />
        </Tab>

        <Tab eventKey="others" title="Others">
          <Others />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Skill;
