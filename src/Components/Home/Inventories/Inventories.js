import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Inventory from "../Inventory/Inventory";

const Inventories = () => {
  const [monitors, setMonitors] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/inventories`;
    axios.get(url).then((response) => setMonitors(response.data));
  }, []);
  return (
    <div>
      <h2 className="text-xl text-center font-semibold my-5">
        Load inventories here : {monitors.length}
      </h2>
      <div className="monitors-container container mx-auto grid grid-cols-3 gap-y-7">
        {monitors.slice(0, 6).map((monitor) => (
          <Inventory key={monitor._id} monitor={monitor}></Inventory>
        ))}
      </div>
    </div>
  );
};

export default Inventories;
