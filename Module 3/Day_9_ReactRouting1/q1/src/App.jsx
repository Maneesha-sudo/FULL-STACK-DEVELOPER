import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Todos from "./Todos";
import NotFound from "./NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root / to /home */}
        <Route path="/" element={<Navigate to="/home" />} />

        {/* Your pages */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/todos" element={<Todos />} />

        {/* 404 page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
