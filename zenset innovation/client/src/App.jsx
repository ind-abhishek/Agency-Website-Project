import { useState } from "react";
import zenLogo from "/zen.svg";
import "./App.css";
import Home from "./screen/Home";
import Service from "./screen/Service";
import Footer from "./component/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Home></Home>
    </>
  );
}

export default App;
