import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock } from "react-icons/md";

import "./Login.css";

const UserAuth = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    errorMessage: "",
  });
  const { email, password } = values;

  const navigate = useNavigate();

  const changeHandler = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const signIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((error) => setValues({ ...values, errorMessage: error.message }));
  };

  const signUp = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        navigate("/home");
        console.log(auth);
      })
      .catch((error) => setValues({ ...values, errorMessage: error.message }));
  };

  return (
    <div className="login-container">
      <div>
        <img
          className="login-ui-img"
          src="https://res.cloudinary.com/duapyyftc/image/upload/v1681543404/login4_be13v2.avif"
          alt="login"
        />
      </div>
      <form className="form-container" autoComplete="off">
        <img
          className="lock"
          src="https://res.cloudinary.com/duapyyftc/image/upload/v1681546239/lock_f2zhds.avif"
          alt="lock"
        />
        <div className="input-container">
          <label className="label-text" htmlFor="email">
            Email
          </label>
          <div className="input-el-container">
            <input
              className="input-el"
              id="email"
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={changeHandler}
            />
            <MdEmail className="icon" />
          </div>
          <p className="error-message">{values.errorMessage}</p>
        </div>
        <div className="input-container">
          <label className="label-text" htmlFor="password">
            Password
          </label>
          <div className="input-el-container">
            <input
              className="input-el"
              id="password"
              type="password"
              name="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={changeHandler}
            />
            <MdLock className="icon" />
          </div>
          <p className="error-message">{values.errorMessage}</p>
        </div>
        <div>
          <button className="button-el" onClick={signIn}>
            Sign In
          </button>
          <button className="button-el" onClick={signUp}>
            SignUp
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserAuth;
