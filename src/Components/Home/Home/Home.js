import React from "react";
import Banner from "../Banner/Banner";
import Bar from "../Bar/Bar";
import Charts from "../Charts/Charts";
import Inventories from "../Inventories/Inventories";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Inventories></Inventories>
      <Bar></Bar>
      <Charts></Charts>
    </div>
  );
};

export default Home;
