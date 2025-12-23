import React, { createContext } from "react";

// Create the context
export const AppContext = createContext();

// Create a Provider component
export const AppProvider = ({ children }) => {
  // Values defined only once
  const values = {
    a: "A",
    b: "B",
    c: "C",
    d: "D",
    e: "E",
    f: "F",
  };

  return (
    <div>
  <AppContext.Provider value={values}>
    {children}
    </AppContext.Provider>;
    </div>
  )
};
