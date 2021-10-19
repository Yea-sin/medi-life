import React from "react";
import Banner from "../Banner/Banner";
import Counter from "../Counter/Counter/Counter";
import Galleries from "../Gallery/Galleries/Galleries";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <Counter />
      <Galleries />
    </div>
  );
};

export default Home;
