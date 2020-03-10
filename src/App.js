import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./pages/home";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import FaqPage from "./pages/Faq";
import ProfilePage from "./pages/Profile";
import ServicesPage from "./pages/Services";
import LoginPage from "./pages/Login";
import RegisterRage from "./pages/Register";



function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Navbar id="navbar-clone" />
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/faq">
            <FaqPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/register">
            <RegisterRage />
          </Route>
          <Route path="/profile">
            <ProfilePage />
          </Route>
          <Route path="/services">
            <ServicesPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
