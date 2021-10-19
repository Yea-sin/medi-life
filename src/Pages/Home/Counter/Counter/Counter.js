import React from "react";
import "./Counter.css";
import { Col, Container, Row } from "react-bootstrap";
import { BiBed, BiBuilding, BiSmile } from "react-icons/bi";
import { FaUserMd } from "react-icons/fa";

const Counter = () => {
  return (
    <>
      <div className="p-5 counter">
        <Container>
          <Row lg={4} md={4} sm={2} xs={1} className="g-3">
            <Col>
              <div className="border py-3">
                <h4>
                  <BiSmile />
                </h4>
                <h2>3729</h2>
                <h5>HAPPY PATIENTS</h5>
              </div>
            </Col>
            <Col>
              <div className="border py-3">
                <h4>
                  <FaUserMd />
                </h4>
                <h2>139</h2>
                <h5>SPECIALISTS</h5>
              </div>
            </Col>
            <Col>
              <div className="border py-3">
                <h4>
                  <BiBuilding />
                </h4>
                <h2>123</h2>
                <h5>WARD ROOMS</h5>
              </div>
            </Col>
            <Col>
              <div className="border py-3">
                <h4>
                  <BiBed />
                </h4>
                <h2>337</h2>
                <h5>CABINS</h5>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Counter;
