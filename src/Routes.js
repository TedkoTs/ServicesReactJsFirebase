import React from "react";

import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/home";
import FaqPage from "./pages/Faq";
import ProfilePage from "./pages/Profile";
import ServicesPage from "./pages/Services";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import SecretPage from "./pages/Secret";
import ServiceDetailPage from "./pages/ServiceDetail";

const Routes = () => (
  <Switch>
    <Route path="/secret">
      <SecretPage />
    </Route>
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
      <RegisterPage />
    </Route>
    <Route path="/profile">
      <ProfilePage />
    </Route>
    <Route exact path="/services">
      <ServicesPage />
    </Route>
    <Route path="/services/:serviceId">
      <ServiceDetailPage />
    </Route>
  </Switch>
);

export default Routes;
