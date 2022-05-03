import React from "react";
import monitor from "../../../images/background/monitor.webp";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner container px-4 lg:px-0 mx-auto lg:flex items-center justify-between mt-7">
      <div className="flex-1 order-2 lg:order-1">
        <h3 className="lg:text-6xl text-3xl text-purple-600 font-bold font-serif mb-3">
          {" "}
          Lorem ipsum dolor sit amet.
        </h3>
        <p className="lg:text-xl text-md">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo quis eum
          saepe vero possimus, expedita cum eos obcaecati,
        </p>
      </div>
      <div className="svg-back flex-1 order-1 lg:order-2 w-fit max-w-full overflow-hidden">
        <img className="max-w-full overflow-hidden" src={monitor} alt="" />
      </div>
    </div>
  );
};

export default Banner;
