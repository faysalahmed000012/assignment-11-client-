import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import privateAxios from "../api/privateAxios";
import auth from "../firebase.init";

const useMyMonitors = (user) => {
  const [myMonitors, setMyMonitors] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const email = user?.email;
    const getMonitors = async () => {
      const url = `https://boiling-springs-23607.herokuapp.com/usersItem?email=${email}`;
      try {
        const { data } = await privateAxios.get(url);
        console.log(data);
        setMyMonitors(data);
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
  return [myMonitors, setMyMonitors];
};

export default useMyMonitors;
