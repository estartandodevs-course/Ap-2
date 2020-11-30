import { BrowserRouter } from "react-router-dom";
import React from "react";
import { Routes } from "./pages/routes";

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
