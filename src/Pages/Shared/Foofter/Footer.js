import React from "react";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-dark p-5">
      <div>
        <p className="text-secondary">
          Copyright &copy; 2021 | Designed With Bootstarp By{" "}
          <a
            rel="noreferrer"
            target="_blank"
            style={{ textDecoration: "none" }}
            href="https://www.facebook.com/fahim.hossain160/">
            Yeasin Arafat
          </a>
        </p>
        <div>
          <Link to="/facebook">
            <BsFacebook className="text-secondary ms-2 fs-2" />
          </Link>
          <Link to="/twitter">
            <BsTwitter className="text-secondary ms-2 fs-2" />
          </Link>
          <Link to="/insta">
            <BsInstagram className="text-secondary ms-2 fs-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
