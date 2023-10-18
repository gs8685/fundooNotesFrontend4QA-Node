import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import "./signin.css";
import logo from "./Googlelogo.png";
import { SigninApi } from "../../services/userservices";

function Signin() {
  const [userSignin, setUserSignin] = useState({
    email: "",
    password: "",
  });

  const [emailError, setEmailError] = useState(false);
  const [emailmessage, setEmailmessage] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordmessage, setPasswordmessage] = useState("");

  const onSignin = (event) => {
    setUserSignin({ ...userSignin, [event.target.name]: event.target.value });
  };

  const SigninSuccess = (userData) => {
    SigninApi(userData)
      .then((login) => {
        console.log("login success", login);
        // localStorage.setItem("fundooToken", login.data.id);
        localStorage.setItem("MyfundooToken", login.data.data);
      })
      .catch((error) => {
        console.log("login failed", error);
      });
  };
  const handleSignin = (e) => {
    e.preventDefault();
    let emailRegex = RegExp(
      "^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9-.]+[.][a-z A-Z 0-9 -]{2,}$"
    );
    let passwordRegex = RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"
    );

    if (!emailRegex.test(userSignin.email)) {
      setEmailmessage("Invalid credentials");
      setEmailError(true);
    } else {
      setEmailmessage("");
      setEmailError(false);
    }
    if (!passwordRegex.test(userSignin.password)) {
      setPasswordmessage("Invalid credentials");
      setPasswordError(true);
    } else {
      setPasswordmessage("");
      setPasswordError(false);
    }

    if (!(emailError || passwordError)) {
      SigninSuccess(userSignin);
    }
  };
  return (
    <>
      <div className="signin-container">
        <img src={logo} alt="logo" className="logo" />
        <div className="signinFirst">
          <p className="pSignin">Sign in</p>
        </div>

        <div className="inputclass">
          {/* <input
            className="classInput"
            type="text"
            name="email"
            placeholder="Enter Email"
          /> */}
          <TextField
            // id="outlined-basic"
            name="email"
            value={userSignin.email}
            onChange={onSignin}
            label="email"
            variant="outlined"
            className="classInput"
            size="small"
            error={emailError}
            helperText={emailmessage}
          />
          <a className="forgot" href="#">
            Forgot Email?
          </a>
          {/* <input
            className="classInput"
            type="password"
            name="email"
            placeholder="Enter Password"
          /> */}
          <TextField
            // id="outlined-basic"
            name="password"
            value={userSignin.password}
            onChange={onSignin}
            label="password"
            variant="outlined"
            className="classInput"
            size="small"
            type="password"
            error={passwordError}
            helperText={passwordmessage}
          />
        </div>

        <a className="forgot" href="#">
          Forgot Password?
        </a>
        <div className="Create-Account">
          <a href="/signup">Create Account</a>
          <button type="submit" className="Buttonclass">
            <a href="#" onClick={handleSignin}>
              {" "}
              Login
            </a>
          </button>
        </div>
      </div>
    </>
  );
}
export default Signin;
