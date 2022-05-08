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
import useMyMonitors from "../../Hooks/useMyMonitors";

const MyItem = () => {
  const [user] = useAuthState(auth);

  const [myMonitors, setMyMonitors] = useMyMonitors(user);

  const navigate = useNavigate();

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

        const url = `https://boiling-springs-23607.herokuapp.com/usersItem/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => console.log(data));

        const rest = myMonitors.filter((monitor) => monitor._id !== id);
        console.log(rest);
        setMyMonitors(rest);
      }
    });
  };
  return (
    <div className="min-h-screen ">
      <h4 className="text-center text-purple-600 text-xl font-semibold my-7">
        Your Items{" "}
      </h4>

      <div className=" container mx-auto grid lg:grid-cols-3 gap-y-7">
        {myMonitors.map((monitor) => (
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
