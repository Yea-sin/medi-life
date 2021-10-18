import React from "react";
import "./Banner.css";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/cwcyFkx/banner-1-1.jpg"
            width="100%"
            height="510px"
            alt="banner"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/z2wMwmZ/banner-2-1.jpg"
            width="100%"
            height="510px"
            alt="banner"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;
