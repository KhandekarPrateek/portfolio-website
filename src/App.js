import "./App.css";
import SideBar from "./pages/SideBar";
import Home from "./pages/Home";
import SplitScreen from "./SplitScreen";
import About from "./pages/About";

const App = () => {
  return (
    <div>
      <SplitScreen leftLen={1} rightLen={4}>
        <SideBar />
        <Home />
        <About />
      </SplitScreen>
    </div>
  );
};

export default App;
