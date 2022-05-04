import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import privateAxios from "../../api/privateAxios";
import { TrashIcon } from "@heroicons/react/solid";
import Swal from "sweetalert2";
import MySingleItem from "../MySingleItem/MySingleItem";

const MyItem = () => {
  const [user] = useAuthState(auth);
  const [monitors, setMonitors] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    const email = user?.email;
    const getMonitors = async () => {
      const url = `http://localhost:5000/emailInventories?email=${email}`;
      try {
        const { data } = await privateAxios.get(url);
        console.log(data);
        setMonitors(data);
      } catch (error) {
        console.log(error.message);
        if (error.response.status === 401 || error.response.status === 403) {
          navigate("/login");
          signOut(auth);
        }
      }
    };
    getMonitors();
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "This item has been deleted.", "success");

        const url = `http://localhost:5000/emailInventory/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => console.log(data));

        const rest = monitors.filter((monitor) => monitor._id !== id);
        console.log(rest);
        setMonitors(rest);
      }
    });
  };
  return (
    <div className="min-h-screen ">
      <h4 className="text-center text-purple-600 text-xl font-semibold">
        Your Items{" "}
      </h4>

      <div className=" container mx-auto grid lg:grid-cols-3 gap-y-7">
        {monitors.map((monitor) => (
          <MySingleItem
            key={monitor._id}
            monitor={monitor}
            handleDelete={handleDelete}
          ></MySingleItem>
        ))}
      </div>
    </div>
  );
};

export default MyItem;
