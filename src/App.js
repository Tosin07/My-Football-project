import React, { useState } from "react";
import Selector from "./Selector";

const App = () => {
  const [show, setShow] = useState(false);

  function showAll() {
    setShow(!show);
  }

  return (
    <div className="app">
      {show && <Selector />}
      <button className="button-app" onClick={showAll}>{show ? "show less" : "show all of my favourite players"}</button>
    </div>
  );
};

export default App;
