import React from "react";
import { connect } from "react-redux";

import { logout } from "./actions/index";

import Routes from "./Routes";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Spinner from "./components/Spinner";

class ServiceApp extends React.Component {
  handleLogout = () => this.props.dispatch(logout());

  renderApplication = auth => {
    return (
      <React.Fragment>
        <Navbar loadFresh auth={auth} logout={this.handleLogout} id="navbar-main" />
        <Navbar auth={auth} id="navbar-clone" logout={this.handleLogout} />
        <Sidebar />
        <Routes />
      </React.Fragment>
    );
  };

  render() {
    const { auth } = this.props;
    return auth.isAuthResolved ? this.renderApplication(auth) : <Spinner />;
  }
}

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps)(ServiceApp);
