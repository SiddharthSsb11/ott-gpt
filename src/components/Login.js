import { useState } from "react";
import Header from "./Header";
import "./Login.css";

const Login = () => {
  const [prevUser, setPrevUser] = useState(true);

  const prevUserHandler = () => {
    setPrevUser(!prevUser);
  };

  return (
    <div>
      <Header />
      <div className="back">
        <form className="flex flex-col justify-between items-start bg-black bg-opacity-75 h-120 w-100 px-10 py-8 rounded-xl ">
          <h1 className="w-full text-4xl text-white font-semibold">
            {prevUser ? "Sign In" : "Sign Up"}
          </h1>
          <div className="flex flex-col justify-between w-full gap-4">
            {!prevUser && (
              <input
                type="text"
                placeholder="Full Name"
                className="w-full text-md bg-gray-700 rounded-lg p-4 font-sans focus:outline-none border-b border-gray-800 focus:border-gray-300"
              />
            )}
            <input
              type="email"
              placeholder="Email Address"
              className="w-full text-md bg-gray-700 rounded-lg p-4 font-sans focus:outline-none border-b border-gray-800 focus:border-gray-300"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full text-md bg-gray-700 rounded-lg p-4 font-sans focus:outline-none border-b border-gray-800 focus:border-gray-300"
            />
          </div>
          <button className="w-full text-lg text-white bg-red-700 rounded-lg py-2 font-sans">
            {prevUser ? "Sign In" : "Sign Up"}
          </button>
          <p className="w-full text-sm text-white font-sans mt-[-4px] ml-1">
            {" "}
            {prevUser ? "New to Netflix ?" : "Already Registered ?"}{" "}
            <span
              className="underline font-bold cursor-pointer"
              onClick={prevUserHandler}
            >
              {" "}
              {prevUser ? "Sign up now" : "Sign in now"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
