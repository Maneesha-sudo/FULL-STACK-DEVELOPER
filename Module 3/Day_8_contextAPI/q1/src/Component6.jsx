import React, { useContext } from "react";
import { AppContext } from "./AppContext";

function Component6() {
  const { e } = useContext(AppContext);

  return (
    <div>
      <h4>This is prop E: {e}</h4>
    </div>
  );
}

export default Component6;
