import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Home, Login, Register } from "./components";
import { UserContext } from "./context/UserContext";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/home" contextComponent={UserContext} component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/" component={Login} />
      </Switch>
    </Router >
  );
}
