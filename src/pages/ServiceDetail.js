import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { fetchServiceById } from "../actions/index";

const ServiceDetail = props => {
  const { serviceId } = useParams();
  const { dispatch } = props;

  useEffect(() => {
    dispatch(fetchServiceById(serviceId));
  }, [serviceId, dispatch]);

  return (
    <section className="hero is-fullheight is-default is-bold">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="columns is-vcentered">
            <div className="column is-5">
              <figure className="image is-4by3">
                <img src={props.service.image} alt="Description" />
              </figure>
            </div>
            <div className="column is-6 is-offset-1">
              <h1 className="title is-2">{props.service.title}</h1>
              <h2 className="subtitle is-4">{props.service.decription}</h2>
              <br />
              <p className="has-text-centered">
                <button className="button is-medium is-info is-outlined">
                  Learn more
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-foot">
        <div className="container">
          <div className="tabs is-centered">
            <ul>
              <li>
                <p>And this is the bottom</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = state => {
  return { service: state.selectedService.item };
};

export default connect(mapStateToProps)(ServiceDetail);
