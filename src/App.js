import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RegisterFirstStep } from "./pages/RegisterFirstStep/RegisterFirstStep.jsx";
import React from "react";

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/">
            <RegisterFirstStep />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
