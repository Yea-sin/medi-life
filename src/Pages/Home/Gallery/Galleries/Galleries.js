import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Gallery from "../Gallery/Gallery";

const Galleries = () => {
  const [galleries, setGalleries] = useState([]);
  useEffect(() => {
    fetch("./gallery.json")
      .then((res) => res.json())
      .then((data) => setGalleries(data));
  }, []);
  return (
    <div>
      <Container className="my-5">
        <div className="my-5">
          <h2 className="title">OUR GALLERY</h2>
          <div>
            <img
              src="https://i.ibb.co/gdSkQnc/heartbeat.png"
              width="120"
              height="40"
              alt=""
            />
          </div>
        </div>
        <Row lg={4} md={4} sm={2} xs={1} className="g-5">
          {galleries.map((gallery) => (
            <Gallery key={gallery.id} img={gallery.img}></Gallery>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Galleries;
