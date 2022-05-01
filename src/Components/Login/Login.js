import { async } from "@firebase/util";
import React, { useRef, useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Login = () => {
  const emailRef = useRef("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);
  const navigate = useNavigate();
  const [errrorMassage, setErrorMassage] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    const name = event.target.floating_name.value;
    const email = event.target.floating_email.value;
    const password = event.target.floating_password.value;
    const confirmPassword = event.target.repeat_password.value;

    if (confirmPassword !== password) {
      setErrorMassage("Passwords did not match");
      console.log("password wrong");
    } else {
      signInWithEmailAndPassword(email, password);
      event.target.floating_email.value = "";
      event.target.floating_password.value = "";
    }
  };
  const handleReset = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
    } else {
      alert("please provide and email");
    }
  };

  if (error || resetError) {
    setErrorMassage(error.message);
    console.log("firebase error");
  }
  if (user) {
    navigate("/home");
  }

  return (
    <div className="container mx-auto my-auto">
      <h3 className="text-3xl font-bold text-center my-10 font-serif">
        <span className="text-purple-500">Login</span> Here !!!
      </h3>
      <form className="mx-auto w-3/5" onSubmit={handleLogin}>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="email"
            name="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
            placeholder=" "
            ref={emailRef}
            required
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="password"
            name="floating_password"
            id="floating_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
        </div>

        <p className="text-red-600 text-center text-lg my-4">{errrorMassage}</p>

        <button
          type="submit"
          className="mx-auto block text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
        >
          Login
        </button>
      </form>
      <p className="text-center my-7">
        New here ?{" "}
        <Link className="text-purple-500" to="/register">
          Register
        </Link>
      </p>
      <p className="text-center my-7">
        Forgot password ?{" "}
        <Link className="text-purple-500" onClick={handleReset}>
          send Email
        </Link>
      </p>
    </div>
  );
};

export default Login;
