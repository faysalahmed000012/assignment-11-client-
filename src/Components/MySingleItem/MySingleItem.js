import { TrashIcon } from "@heroicons/react/solid";
import React from "react";

const MySingleItem = ({ monitor, handleDelete }) => {
  return (
    <div>
      <div className="mx-auto">
        <div className="max-w-sm  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div
            style={{ height: "255px", width: "382px" }}
            className="rounded-t-lg "
          >
            <img
              className="rounded-t-lg mx-auto my-auto h-full"
              src={monitor.picture}
              alt=""
            />
          </div>

          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {monitor.product}
            </h5>

            <p className="mb-3 text-xl  font-normal text-gray-700 dark:text-gray-400">
              Supplier: {monitor.name}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Price: {monitor.price}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Quantity: {monitor.quantity}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {monitor.about}
            </p>
            <button
              onClick={() => handleDelete(monitor._id)}
              className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
              <TrashIcon className="w-5 " />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySingleItem;
