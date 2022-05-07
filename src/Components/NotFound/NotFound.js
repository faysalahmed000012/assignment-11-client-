import React from "react";
import notFound from "../../images/notFound2.jpg";

const NotFound = () => {
  return (
    <div>
      <h3 className="text-2xl text-center font-thin my-4">
        The page you are looking is not found
      </h3>
      <img src={notFound} alt="" />
    </div>
  );
};

export default NotFound;
