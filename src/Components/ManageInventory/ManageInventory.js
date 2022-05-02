import React from "react";
import useInventory from "../../Hooks/useInventory";
import { TrashIcon } from "@heroicons/react/solid";
import axios from "axios";

const ManageInventory = () => {
  const [monitors, setMonitors] = useInventory();
  const handleDelete = (id) => {
    const url = `http://localhost:5000/inventory/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    const rest = monitors.filter((monitor) => monitor._id !== id);
    setMonitors(rest);
  };
  return (
    <div className="container mx-auto my-7">
      <h3 className="text-xl text-center font-semibold text-purple-600 mb-3">
        Manage Monitors : {monitors.length}
      </h3>

      <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 font-serif uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Supplier
                </th>
                <th scope="col" className="px-6 py-3">
                  price
                </th>
                <th scope="col" className="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            {monitors.map((monitor) => {
              return (
                <tbody key={monitor._id}>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                      {monitor.product}
                    </th>
                    <td className="px-6 py-4">{monitor.name}</td>
                    <td className="px-6 py-4">{monitor.price}</td>
                    <td className="px-6 py-4">{monitor.quantity}</td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => handleDelete(monitor._id)}
                        className="font-medium text-red-600 bg-red-300 flex items-center justify-center rounded-full w-8 h-8 dark:text-red-500"
                      >
                        <TrashIcon className="w-5 " />
                      </button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageInventory;
