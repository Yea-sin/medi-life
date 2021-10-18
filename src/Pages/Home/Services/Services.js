import React from "react";
import { Container, Row } from "react-bootstrap";
import useService from "../../../Hooks/useService";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const { services } = useService();
  return (
    <>
      <div className="mt-5">
        <h2 className="service">OUR SERVICES</h2>
        <div>
          <img
            src="https://i.ibb.co/gdSkQnc/heartbeat.png"
            width="120"
            height="40"
            alt=""
          />
        </div>
        <Container>
          <Row lg={3} md={3} sm={1} className="my-4 g-5">
            {services.slice(0, 6).map((service) => (
              <Service key={service.id} service={service}></Service>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Services;
