import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

const NotFound = () => {
  return (
    <div>
      <img
        src="https://i.ibb.co/sqH4058/404.png"
        className="img-fluid mb-3"
        style={{ maxHeight: "450px" }}
        alt=""
      />
      <div className="mb-2">
        <NavLink to="/home">
          <Button variant="outline-success">Go Home</Button>
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
