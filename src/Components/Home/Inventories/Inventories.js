import { ArrowRightIcon } from "@heroicons/react/solid";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useInventory from "../../../Hooks/useInventory";
import Inventory from "../Inventory/Inventory";

const Inventories = () => {
  const [monitors, setMonitors] = useInventory();

  return (
    <div id="services" className="container mx-auto">
      <h2 className="text-xl text-center text-purple-600 font-semibold my-5 ">
        Inventories Here
      </h2>
      <div className="container mx-auto grid lg:grid-cols-3 gap-y-7">
        {monitors.slice(0, 6).map((monitor) => (
          <Inventory key={monitor._id} monitor={monitor}></Inventory>
        ))}
      </div>
      <Link
        className="flex items-center justify-end ml-auto my-5 font-medium  text-purple-600  "
        to="/manage"
      >
        Manage Items <ArrowRightIcon className="w-4 ml-2"></ArrowRightIcon>
      </Link>
    </div>
  );
};

export default Inventories;
