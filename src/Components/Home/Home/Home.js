import React from "react";
import Banner from "../Banner/Banner";
import Bar from "../Bar/Bar";
import Inventories from "../Inventories/Inventories";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Inventories></Inventories>
      <Bar></Bar>
    </div>
  );
};

export default Home;
