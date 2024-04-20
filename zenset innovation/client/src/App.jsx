import { useState } from "react";
import zenLogo from "/zen.svg";
import "./App.css";
import Navbar from "./component/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar></Navbar>
    </>
  );
}

export default App;
