import React, { useState } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import google from "../../images/google2 (1).png";
import Loading from "../Loading/Loading";

const SocialLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  let errorElement;
  if (error) {
    errorElement = (
      <div>
        <p className="text-red-700 text-center font-semibold my-3">
          Error: {error?.message}
        </p>
      </div>
    );
  }
  if (loading) {
    return <Loading></Loading>;
  }
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div>
      <div className="flex items-center justify-center my-5">
        <div className="bg-purple-600 w-1/4" style={{ height: "1px" }}></div>

        <p className="mx-2">or</p>

        <div className="bg-purple-600 w-1/4" style={{ height: "1px" }}></div>
      </div>
      <p className="text-gray-400 my-4 text-center text-xl">
        With Social Media Account
      </p>
      {errorElement}
      <button
        type="button"
        onClick={() => signInWithGoogle()}
        style={{ margin: "0 auto" }}
        className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900 flex items-center justify-around duration-300"
      >
        <img src={google} alt="" /> <p className="ml-3">Google</p>
      </button>
    </div>
  );
};

export default SocialLogin;
