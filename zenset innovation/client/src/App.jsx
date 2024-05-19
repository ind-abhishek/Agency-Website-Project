import { useState } from "react";
import zenLogo from "/zen.svg";
import "./App.css";
import Home from "./screen/Home";
import FAQ from "./screen/FAQ";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Home></Home>
    </>
  );
}

export default App;
