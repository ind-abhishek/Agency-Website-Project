import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screen/Home";
import Navbar from "./component/Navbar";
import "./App.css";
import Soon from "./screen/Soon";
import Notice from "./component/Notice";
import Refund from "./screen/Refund";

function App() {
  return (
    <Router>
      {/* <Notice></Notice> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Refund" element={<Refund />} />
        {/* Define other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
