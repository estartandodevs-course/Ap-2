import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import { Routes } from "./pages/routes";
import { RegisterFirstStep } from "./pages/RegisterFirstStep/RegisterFirstStep";
import { RegisterSecondStep } from "./pages/RegisterSecondStep/RegisterSecondStep";
import { RegisterThirdStep } from "./pages/RegisterThirdStep/RegisterThirdStep";
import { RegisterFourthStep } from "./RegisterFourthStep/RegisterFourthStep";

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
