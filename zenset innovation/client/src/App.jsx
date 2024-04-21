import { useState } from "react";
import zenLogo from "/zen.svg";
import "./App.css";

import Navbar from "./component/Navbar";
import Glow from "./component/Glow";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Glow></Glow>
    </>
  );
}

export default App;
