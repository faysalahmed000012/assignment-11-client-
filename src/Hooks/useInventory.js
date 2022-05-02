import React, { useEffect, useState } from "react";
import axios from "axios";

const useInventory = () => {
  const [monitors, setMonitors] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/inventories`;
    axios.get(url).then((response) => setMonitors(response.data));
  }, []);
  return [monitors, setMonitors];
};

export default useInventory;
