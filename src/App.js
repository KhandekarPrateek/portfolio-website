import { Col, Row } from "reactstrap";
import "./App.css";
import SideBar from "./pages/SideBar";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <Row>
        <Col sm={2}>
          <SideBar />
        </Col>
        <Col>
          <Home />
          <Home />
        </Col>
      </Row>
    </div>
  );
};

export default App;
