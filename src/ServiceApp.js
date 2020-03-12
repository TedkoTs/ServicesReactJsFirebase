import React from "react";

import Routes from "./Routes";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";


class ServiceApp extends React.Component {
  renderApplication = () => {
    return (
      <React.Fragment>
        <Navbar />
        <Navbar id="navbar-clone" />
        <Sidebar />
        <Routes />
      </React.Fragment>
    );
  }

  render() {
    return this.renderApplication();
  }
}

export default ServiceApp;
