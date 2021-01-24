import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Home, Login, Register } from "./components";
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalProvider } from "./context/GlobalState";

export default function App() {
  return (
    <GlobalProvider>
      <Router>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/" component={Login} />
        </Switch>
      </Router>
    </GlobalProvider>

  );
}
