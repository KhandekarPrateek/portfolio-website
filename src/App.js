import { Col, Row } from "reactstrap";
import "./App.css";
import SideBar from "./pages/SideBar";
import Home from "./pages/Home";
import About from "./pages/About";

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
        </Col>
      </Row>
    </div>
  );
};

export default App;
