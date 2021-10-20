import React from "react";
import "./Doctors.css";
import { Col, Container, Row } from "react-bootstrap";

const Doctors = () => {
  return (
    <Container>
      <div className="mt-5">
        <h2 className="title">OUR DOCTORS</h2>
        <div>
          <img
            src="https://i.ibb.co/gdSkQnc/heartbeat.png"
            width="120"
            height="40"
            alt=""
          />
        </div>
      </div>
      <Row lg={3} md={3} sm={2} xs={1} className="my-5 gy-5 doctors">
        <Col>
          <img src="https://i.ibb.co/SrsHNY5/1.jpg" width="200px" alt="" />
        </Col>
        <Col>
          <img src="https://i.ibb.co/1rrc28X/2.jpg" width="200px" alt="" />
        </Col>
        <Col>
          <img
            src="https://i.ibb.co/PjPqF5W/Friendly-Latin-American-female-doctor-at-the-hospital-looking-at-the-camera-and-smiling.jpg"
            width="200px"
            alt=""
          />
        </Col>
        <Col>
          <img
            src="https://i.ibb.co/QD0hFFY/Confident-multiethnic-male-nurse-in-front-of-his-medical-team-looking-at-camera-wearing-face-mask-du.jpg"
            width="200px"
            alt=""
          />
        </Col>
        <Col>
          <img
            src="https://i.ibb.co/sspVpQd/Portrait-of-beautiful-mature-woman-doctor-holding-digital-tablet-and-looking-at-camera-Confident-fem.jpg"
            width="200px"
            alt=""
          />
        </Col>
        <Col>
          <img src="https://i.ibb.co/swghBfK/6.jpg" width="200px" alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default Doctors;
