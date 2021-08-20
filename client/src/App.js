// import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import IronMan from "./pages/IronMan";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/ironMan">
          <IronMan />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
