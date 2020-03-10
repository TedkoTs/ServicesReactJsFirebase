/* eslint jsx-a11y/anchor-is-valid: 0 */
import React from "react";
import Navbar from "../components/navbar";
import NavbarClone from "../components/navbarClone";
import { getServices } from "../store/index";
import ServiceItem from "../components/service/serviceItem";
import Hero from "../components/hero";

class Home extends React.Component {
  state = {
    services: []
  };

  componentDidMount() {
    const services = getServices();
    this.setState({ services });
  }

  renderServices = services => {
    return services.map(service => (
      <ServiceItem key={service.id} service={service} />
    ));
  };

  render() {
    return (
      <div>
        <Navbar />
        <NavbarClone />
        <Hero />
        <section className="section section-feature-grey is-medium">
          <div className="container">
            <div className="title-wrapper has-text-centered">
              <h2 className="title is-2">Great Power Comes </h2>
              <h3 className="subtitle is-5 is-muted">
                With great Responsability
              </h3>
              <div className="divider is-centered"></div>
            </div>

            <div className="content-wrapper">
              <div className="columns">
                {this.renderServices(this.state.services)}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
