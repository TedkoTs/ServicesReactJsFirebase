import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const withAuthorisation = Component => {
  class WithAuthorisation extends React.Component {
    render() {
      const { auth, dispatch, ...rest } = this.props;
      return auth.isAuth ? <Component {...rest} /> : <Redirect to="/login" />;
    }
  }

  return connect(({ auth }) => ({ auth }))(WithAuthorisation);
};

export default withAuthorisation;
