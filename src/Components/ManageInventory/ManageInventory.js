import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ManageInventory = () => {
  const { id } = useParams();
  const [inventory, setInventory] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/inventory/${id}`;
    axios.get(url).then((response) => setInventory(response.data));
  }, [id]);

  return (
    <div>
      <h3>This is product : {inventory.product}</h3>
    </div>
  );
};

export default ManageInventory;
