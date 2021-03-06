import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import CustomLink from "../../CustomLink/CustomLink";
import Loading from "../../Loading/Loading";
import logo from "../../../images/monitor.png";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  let Links;

  if (!user) {
    Links = [
      { name: "HOME", link: "/" },
      { name: "INVENTORY", link: "home#services" },
      { name: "BLOG'S", link: "/blogs" },
      { name: "LOGIN", link: "/login" },
    ];
  } else {
    Links = [
      { name: "HOME", link: "/" },
      { name: "INVENTORY", link: "home#services" },
      { name: "ADD", link: "/add" },
      { name: "BLOG'S", link: "/blogs" },
      { name: "MANAGE", link: "/manage" },
      { name: "MYITEM", link: "/myitem" },
    ];
  }
  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full ">
      <div className="md:flex items-center justify-between bg-slate-200 py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          <span className="text-3xl text-indigo-600 mr-1 pt-2 font-thin">
            <img width={30} src={logo} alt="" />
          </span>
          MONITOR HOUSE
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-slate-200 md:z-auto z-[2] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 md:my-0 my-7">
              <CustomLink
                to={link.link}
                className="text-gray-800 font-mono hover:text-purple-700 duration-300"
              >
                {link.name}
              </CustomLink>
            </li>
          ))}
          {user ? (
            <button
              onClick={() => signOut(auth)}
              type="button"
              className="text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 py-2 px-6 md:ml-8"
            >
              Sign Out
            </button>
          ) : (
            <button
              onClick={() => navigate("/register")}
              type="button"
              className="text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 py-2 px-6 md:ml-8"
            >
              Register
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
