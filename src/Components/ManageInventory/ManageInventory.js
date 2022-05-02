import React from "react";
import useInventory from "../../Hooks/useInventory";

const ManageInventory = () => {
  const [monitors, setMonitors] = useInventory();
  return (
    <div className="container mx-auto">
      <h3>here are these : {monitors.length}</h3>

      <div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Product name
                </th>
                <th scope="col" class="px-6 py-3">
                  Supplier
                </th>
                <th scope="col" class="px-6 py-3">
                  price
                </th>
                <th scope="col" class="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" class="px-6 py-3">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            {monitors.map((monitor) => {
              return (
                <tbody>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                      {monitor.product}
                    </th>
                    <td class="px-6 py-4">{monitor.name}</td>
                    <td class="px-6 py-4">{monitor.price}</td>
                    <td class="px-6 py-4">{monitor.quantity}</td>
                    <td class="px-6 py-4 text-right">
                      <button class="font-medium text-red-600 dark:text-red-500">
                        Delete
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
