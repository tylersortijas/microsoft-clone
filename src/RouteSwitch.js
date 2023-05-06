import React from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import HomePage from "./components/HomePage";

function RouteSwitch() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </HashRouter>
  );
}

export default RouteSwitch;
