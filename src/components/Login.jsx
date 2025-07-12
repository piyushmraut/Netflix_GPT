/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import Header from "./Header";
import { validateData } from "../utils/validate";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { AVATAR_URL, BG_URL } from "../utils/constants";

function Login() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const name = useRef(null);
  const dispatch = useDispatch();
  const onHandleChange = () => {
    const message = validateData(email.current.value, password.current.value);

    setErrorMessage(message);
    // console.log(email.current.value);
    // console.log(password.current.value);

    if (message) {
      return;
    }

    if (!isSignIn) {
      // Sign Up logic

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: AVATAR_URL,
          })
            .then(() => {
              const { uid, displayName, email, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  displayName: displayName,
                  email: email,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {});
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      // Sign In logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleChange = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_URL} alt="background image" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="text-white bg-black/80 w-3/12 absolute mt-36 mx-auto left-0 right-0 p-12 my-36 rounded-xl"
      >
        <h1 className="text-4xl ml-2 mb-4 font-bold text-white">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            className="p-4 my-4 bg-gray-900 opacity-75 border-white border rounded-sm w-full placeholder:text-gray-200 placeholder:text-xl"
            placeholder="Enter your Name"
          />
        )}
        <input
          type="text"
          className="p-4 my-4 bg-gray-900 opacity-75 border border-white rounded-sm w-full placeholder:text-gray-200 placeholder:text-xl "
          placeholder="Email Address"
          ref={email}
        />
        <input
          type="password"
          className="p-4 my-4 bg-gray-900 opacity-75 border border-white rounded-sm w-full placeholder:text-gray-200 placeholder:text-xl "
          placeholder="Password"
          ref={password}
        />
        <p className="text-red-500">{errorMessage}</p>
        <button
          className="bg-red-600 p-4 my-4 w-full cursor-pointer rounded-sm text-2xl font-semibold"
          onClick={onHandleChange}
        >
          {" "}
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={toggleChange}>
          {isSignIn
            ? "New to Netflix ? Sign Up Now."
            : "Already registered ? Sign In now."}
        </p>
      </form>
    </div>
  );
}

export default Login;
