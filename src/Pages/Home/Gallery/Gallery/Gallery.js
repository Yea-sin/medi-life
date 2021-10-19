import React from "react";
import { Col } from "react-bootstrap";

const Gallery = ({ img }) => {
  return (
    <div>
      <Col>
        <div>
          <img src={img} width="250px" alt="" />
        </div>
      </Col>
    </div>
  );
};

export default Gallery;
