import { Col, Row } from "reactstrap";
import "./App.css";
import SideBar from "./pages/SideBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <div>
      <Row>
        <Col sm={2}>
          <SideBar />
        </Col>
        <Col sm={10}>
          <Home />
          <About />
          <Education />
          <Projects />
          <Skills />
          <Contact />
        </Col>
      </Row>
    </div>
  );
};

export default App;
