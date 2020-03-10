import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import NavbarClone from "./components/navbarClone";

import HomePage from "./pages/home";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <NavbarClone />
        <Sidebar />
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
