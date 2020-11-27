import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home.jsx";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        </Switch>
    </Router>
  );
}

export default App;
