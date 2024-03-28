import { Col, Row } from "reactstrap";
import "./App.css";
import SideBar from "./pages/SideBar";
import Home from "./pages/Home";
import SplitScreen from "./SplitScreen";

const App = () => {
  return (
    <div>
      <SplitScreen leftLen={1} rightLen={4}>
        <SideBar />
        <Home />
        <Home />
      </SplitScreen>
    </div>
  );
};

export default App;
