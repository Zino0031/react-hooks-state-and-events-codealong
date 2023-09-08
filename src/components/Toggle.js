import React from "react";
import { useState } from "react";

function Toggle() {
  const [isOn,setisOn] = useState(false);
  function handleClick() {
    setisOn((isOn)=> !isOn)
  }
  const color = isOn ? "red" : "white";
  return <button onClick={handleClick}  style={{ background: color }}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
