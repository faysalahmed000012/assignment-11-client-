import { ArrowRightIcon } from "@heroicons/react/solid";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Inventory = ({ monitor }) => {
  const { _id, name, price, picture, quantity, product, about } = monitor;
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="mx-auto">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="max-w-sm  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
        >
          <div
            style={{ height: "255px", width: "382px" }}
            className="rounded-t-lg "
          >
            <img
              className="rounded-t-lg mx-auto my-auto h-full"
              src={picture}
              alt=""
            />
          </div>

          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {product}
            </h5>

            <p className="mb-3 text-xl  font-normal text-gray-700 dark:text-gray-400">
              Supplier: {name}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Price: {price}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Quantity: {quantity}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {about}
            </p>
            <Link
              to={`/inventory/${_id}`}
              className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-blue-800"
            >
              Update
              <svg
                className="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inventory;
