import React from "react";
import { Col, Row } from "react-bootstrap";

const Department = ({ department }) => {
  console.log(department);
  const { name, info, img } = department;
  return (
    <Row
      lg={2}
      md={2}
      sm={1}
      xs={1}
      className="gx-5 d-flex align-items-center shadow-lg rounded p-3">
      <Col>
        <div>
          <h2 style={{ fontFamily: "Dosis" }}>{name}</h2>
          <p>{info.slice(0, 195)}</p>
        </div>
      </Col>
      <Col>
        <img className="img-fluid w-75" src={img} alt="" />
      </Col>
    </Row>
  );
};

export default Department;
