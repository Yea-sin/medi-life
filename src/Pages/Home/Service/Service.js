import React from "react";
import "./Service.css";
import { Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FcViewDetails } from "react-icons/fc";

const Service = ({ service }) => {
  const { image, name, description } = service;

  return (
    <>
      <Col>
        <div>
          <img src={image} width="100px" alt="" />
        </div>
        <h4>{name}</h4>
        <p className="service-details">
          <NavLink to={`/services/${description}`}>
            See details <FcViewDetails className="mb-1" />
          </NavLink>
        </p>
      </Col>
    </>
  );
};

export default Service;
