import "./App.css";
import { useState } from "react";
import Bulb from "./commponents/Bulb";
import Counter from "./commponents/Bulb";

function App() {
  // console.log(state);
  return (
    <>
      <div>
        <Bulb />
        <Counter />
      </div>
    </>
  );
}

export default App;
