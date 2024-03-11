import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

import "./Login.css";
import { USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [prevUser, setPrevUser] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  // const [isInputFocused, setInputFocus] = useState(false);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const prevUserHandler = () => {
    setPrevUser(!prevUser);
  };

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    if (!prevUser) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          // console.log("---user signup---", user);

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          //  Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  // const focusHandler = () => {
  //   setInputFocus(true);
  // };

  // const blurHandler = () => {
  //   setInputFocus(false);
  // };

  return (
    <div>
      <Header />
      <div className="back">
        <form
          className="flex flex-col justify-between items-start bg-black bg-opacity-75 h-120 w-100 px-10 py-8 rounded-xl"
          onSubmit={(e) => e.preventDefault()}
        >
          <h1 className="w-full text-4xl text-white font-semibold">
            {prevUser ? "Sign In" : "Sign Up"}
          </h1>
          <div className="flex flex-col justify-between w-full gap-4">
            {!prevUser && (
              <input
                ref={name}
                type="text"
                placeholder="Full Name"
                className="w-full text-md  text-gray-200 bg-gray-700 rounded-lg p-4 font-sans focus:outline-none border-b border-gray-800 focus:border-gray-300"
              />
            )}
            <input
              ref={email}
              // onFocus={focusHandler}
              // onBlur={blurHandler}
              type="email"
              placeholder="Email Address"
              className="w-full text-md text-gray-200 bg-gray-700 rounded-lg p-4 font-sans focus:outline-none focus:border-b-2 focus:border-gray-400"
            />
            <input
              ref={password}
              // onFocus={focusHandler}
              // onBlur={blurHandler}
              type="password"
              placeholder="Password"
              className="w-full text-md  text-gray-200 bg-gray-700 rounded-lg p-4 font-sans focus:outline-none focus:border-b-2 focus:border-gray-400"
            />
            {errorMessage && (
              <p className="text-red-700 font-semi-bold text-md ml-1">
                {errorMessage}
              </p>
            )}
          </div>
          <button
            className="w-full text-lg text-white bg-red-700 rounded-lg py-2 font-sans"
            onClick={handleButtonClick}
          >
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
