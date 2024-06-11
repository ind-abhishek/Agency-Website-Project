import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screen/Home";
import Navbar from "./component/Navbar";
import "./App.css";
import Soon from "./screen/Soon";
import Notice from "./component/Notice";
import Refund from "./screen/Refund";
import Footer from "./component/Footer";

function App() {
  return (
    <Router>
      {/* <Notice></Notice> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Refund" element={<Refund />} />
        {/* Define other routes as needed */}
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
