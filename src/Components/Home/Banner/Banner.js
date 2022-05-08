import React, { useEffect } from "react";
import monitor from "../../../images/background/monitor.webp";
import "./Banner.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      className="banner container px-4 lg:px-0 mx-auto lg:flex items-center justify-between mt-7"
    >
      <div className="flex-1 order-2 lg:order-1">
        <h3 className="lg:text-6xl text-3xl  font-bold font-serif mb-3">
          {" "}
          Find Monitor at <br />{" "}
          <span className="text-purple-600 mt-2">Monitor House</span>.
        </h3>
        <p className="lg:text-xl text-md">
          Monitor House is a monitor warehouse management service website. In
          this warehouse full of monitors from various brand . User can add,
          delete and update items by their own.
        </p>
      </div>
      <div
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500"
        className="svg-back flex-1 order-1 lg:order-2 w-fit max-w-full overflow-hidden"
      >
        <img className="max-w-full overflow-hidden" src={monitor} alt="" />
      </div>
    </div>
  );
};

export default Banner;
