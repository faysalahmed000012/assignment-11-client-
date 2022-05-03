import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const GetInventory = () => {
  const { id } = useParams();
  const [inventory, setInventory] = useState({});
  let { name, product, about, price, picture, quantity } = inventory;
  const url = `http://localhost:5000/inventory/${id}`;
  useEffect(() => {
    axios.get(url).then((response) => setInventory(response.data));
  }, [id, url]);
  const handleDelivered = () => {
    const newQuantity = quantity - 1;
    const newInventory = {
      name: name,
      product: product,
      about: about,
      price: price,
      picture: picture,
      quantity: newQuantity,
    };
    setInventory(newInventory);

    axios.put(url, newInventory).then((response) => console.log(response));
  };

  const handleAdd = (event) => {
    event.preventDefault();
    const inputValue = event.target.AddedQuantity.value;
    const addedQuantity = Number(inputValue);

    const newInventory = {
      name: name,
      product: product,
      about: about,
      price: price,
      picture: picture,
      quantity: quantity + addedQuantity,
    };
    setInventory(newInventory);
    axios.put(url, newInventory).then((response) => console.log(response));

    event.target.AddedQuantity.value = "";
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="mt-24 w-4/5 flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img
            className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={picture}
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {product}
            </h5>
            <p className="mb-3 text-xl font-normal text-gray-700 dark:text-gray-400">
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
            <button
              onClick={handleDelivered}
              className=" block my-4 w-24 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm  px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
            >
              Delivered
            </button>
          </div>
        </div>
      </div>
      <h3 className="text-center text-2xl font-semibold text-gray-500 mt-10">
        Restock The Items
      </h3>
      <div className="flex items-center justify-center">
        <form onSubmit={handleAdd} className="block mx-auto my-5">
          <input
            type="number"
            name="AddedQuantity"
            className="g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-purple-500 focus:border-purple-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <button className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-r-lg text-sm  px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default GetInventory;
