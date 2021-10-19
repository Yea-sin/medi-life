import React, { useState } from "react";
import "./Departments.css";
import { Col, Container, Row } from "react-bootstrap";
import Department from "../Department/Department";
import useDepartments from "../../../Hooks/useDepartments";

const Departments = () => {
  const [name, setname] = useState("MEDICINE");
  const [departments] = useDepartments();
  const handleDepartment = (type) => {
    setname(type);
  };
  return (
    <>
      <div className="mt-5">
        <h2 className="title">OUR DEPARTMNETS</h2>
        <div>
          <img
            src="https://i.ibb.co/gdSkQnc/heartbeat.png"
            width="120"
            height="40"
            alt=""
          />
        </div>
      </div>
      <div>
        <Container className="my-3 department-bg">
          <Row lg={2} md={2} sm={1} xs={1} className="align-items-center p-5">
            <Col>
              <div className="row  department-menu">
                <p
                  className="col-md-6"
                  onClick={() => handleDepartment("MEDICINE")}>
                  MEDICINE
                </p>
                <p
                  className="col-md-6"
                  onClick={() => handleDepartment("CARDIOLOGY")}>
                  CARDIOLOGY
                </p>
                <p
                  className="col-md-6"
                  onClick={() => handleDepartment("NEUROLOGY")}>
                  NEUROLOGY
                </p>
                <p
                  className="col-md-6"
                  onClick={() => handleDepartment("GASTROLOGY")}>
                  GASTROLOGY
                </p>
                <p
                  className="col-md-6"
                  onClick={() => handleDepartment("UROLOGY")}>
                  UROLOGY
                </p>
                <p
                  className="col-md-6"
                  onClick={() => handleDepartment("DENTAL")}>
                  DENTAL CARE
                </p>
                <p
                  className="col-md-6"
                  onClick={() => handleDepartment("GYNECOLOGY")}>
                  GYNECOLOGY
                </p>
                <p
                  className="col-md-6"
                  onClick={() => handleDepartment("CHILD CARE")}>
                  CHILD CARE
                </p>
              </div>
            </Col>
            <Col>
              <div>
                {departments
                  .filter((item) => item.name === name)
                  .map((department) => (
                    <Department key={department.id} department={department} />
                  ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Departments;
