import React from "react";
import withAuthorisation from "../../components/hoc/withAuthorisation";
import { fetchUserServices } from "../../actions/index";
import ServiceItem from "../../components/service/serviceItem";

class UserServices extends React.Component {
  componentDidMount() {
    const {
      auth: { user },
      dispatch
    } = this.props;
    dispatch(fetchUserServices(user.uid));
  }

  render() {
    const { services } = this.props.auth.user;
    
    return (
      <div className="container">
        <div className="content-wrapper">
          <h1 className="title">My Services</h1>
          <div className="columns is-multiline">
            {services.map(service => (
              <div key={service.id} className="column">
                <ServiceItem service={service} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withAuthorisation(UserServices);
