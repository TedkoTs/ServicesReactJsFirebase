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
import ServiceCreatePage from "./pages/services/ServiceCreate";
import UserServicesPage from "./pages/services/UserService";

const Routes = () => (
  <Switch>
    <Route exact path="/secret">
      <SecretPage />
    </Route>
    <Route exact path="/">
      <HomePage />
    </Route>
    <Route exact path="/faq">
      <FaqPage />
    </Route>
    <Route exact path="/login">
      <LoginPage />
    </Route>
    <Route exact path="/register">
      <RegisterPage />
    </Route>
    <Route exact path="/profile">
      <ProfilePage />
    </Route>
    <Route exact path="/services">
      <ServicesPage />
    </Route>
    <Route exact path="/services/me">
      <UserServicesPage />
    </Route>
    <Route exact path="/services/new">
      <ServiceCreatePage />
    </Route>
    <Route exact path="/services/:serviceId">
      <ServiceDetailPage />
    </Route>
  </Switch>
);

export default Routes;
