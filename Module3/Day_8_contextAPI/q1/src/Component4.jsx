import React, { useContext } from "react";
import { AppContext } from "./AppContext";
import Component5 from "./Component5";

function Component4() {
  const { c, d } = useContext(AppContext);

  return (
    <div>
      <h4>This is prop C: {c}</h4>
      <h4>This is prop D: {d}</h4>

      <Component5 />
    </div>
  );
}

export default Component4;
