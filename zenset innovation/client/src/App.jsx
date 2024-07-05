import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screen/Home";
import Navbar from "./component/Navbar";
import "./App.css";
import Soon from "./screen/Soon";
import Notice from "./component/Notice";
import Refund from "./screen/Refund";
import Support from "./screen/Support";
import Policy from "./screen/Policy";
import Terms from "./screen/Terms";
import Footer from "./component/Footer";

function App() {
  return (
    <Router>
      {/* <Notice></Notice> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Refund" element={<Refund />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/Policy" element={<Policy />} />
        <Route path="/Terms" element={<Terms />} />
        {/* Define other routes as needed */}
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
