import { BrowserRouter } from "react-router-dom";
import React from "react";
import { Routes } from "./pages/routes";
import "./config/firebase.js";

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
