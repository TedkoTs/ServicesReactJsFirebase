/* eslint jsx-a11y/anchor-is-valid: 0 */
import React from "react";
import ServiceItem from "../components/service/serviceItem";
import Hero from "../components/hero";
import { connect } from "react-redux";
import { fetchServices } from "../actions/index";

class Home extends React.Component {
  state = {
    services: []
  };

  componentDidMount() {
    this.props.dispatch(fetchServices());
  }

  renderServices = services => {
    return services.map(service => (
      <ServiceItem key={service.id} service={service} />
    ));
  };

  render() {
    return (
      <div>
        <Hero />
        <section className="section section-feature-grey is-medium">
          <div className="container">
            <div className="title-wrapper has-text-centered">
              <h2 className="title is-2">Great Power Comes </h2>
              <h3 className="subtitle is-5 is-muted">
                With great Responsibility
              </h3>
              <div className="divider is-centered"></div>
            </div>

            <div className="content-wrapper">
              <div className="columns">
                {this.renderServices(this.props.services)}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({ services: state.services.items });

export default connect(mapStateToProps)(Home);
