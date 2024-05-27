import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screen/Home";
import Navbar from "./component/Navbar";
import "./App.css";
import Soon from "./screen/Soon";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<Soon />} /> */}
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
