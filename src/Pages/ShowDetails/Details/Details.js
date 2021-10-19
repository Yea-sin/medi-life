import React from "react";
import { useParams } from "react-router";

const Details = () => {
  const { serviceId } = useParams();
  return (
    <div className="p-5">
      <h5>{serviceId}</h5>
    </div>
  );
};

export default Details;
