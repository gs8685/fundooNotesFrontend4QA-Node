import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import "./signup.css";
import logo from "./Googlelogo.png";
import acclogo from "./Googleaccount.svg";
import { SignupApi } from "../../services/userservices";

function Signup() {
  //camel casing in bridgelabz swagger doc
  const [userDetails, setUserDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
    // service: "advanced",
  });

  const [firstnameError, setFirstnameError] = useState(false);
  const [firstnamemessage, setFirstnamemessage] = useState("");
  const [lastnameError, setLastnameError] = useState(false);
  const [lastnamemessage, setLastnamemessage] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailmessage, setEmailmessage] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordmessage, setPasswordmessage] = useState("");
  const [cpasswordError, setCpasswordError] = useState(false);
  const [cpasswordmessage, setCpasswordmessage] = useState("");

  const handleChange = (event) => {
    setUserDetails({ ...userDetails, [event.target.name]: event.target.value });
  };

  const SignupSuccess = (userData) => {
    SignupApi(userData);
  };
  const handleCreate = (e) => {
    e.preventDefault();
    console.log(userDetails);
    let nameRegex = RegExp("^[A-Z]{1}[a-z A-Z]{2,}$");
    let emailRegex = RegExp(
      "^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9-.]+[.][a-z A-Z 0-9 -]{2,}$"
    );
    let passwordRegex = RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"
    );
    if (!nameRegex.test(userDetails.firstname)) {
      setFirstnamemessage("Invalid firstname");
      setFirstnameError(true);
    } else {
      setFirstnamemessage("");
      setFirstnameError(false);
    }
    if (!nameRegex.test(userDetails.lastname)) {
      setLastnamemessage("Invalid lastname");
      setLastnameError(true);
    } else {
      setLastnamemessage("");
      setLastnameError(false);
    }
    if (!emailRegex.test(userDetails.email)) {
      setEmailmessage("Invalid email type");
      setEmailError(true);
    } else {
      setEmailmessage("");
      setEmailError(false);
    }
    if (!passwordRegex.test(userDetails.password)) {
      setPasswordmessage("Invalid password");
      setPasswordError(true);
    } else {
      setPasswordmessage("");
      setPasswordError(false);
    }

    if (!(userDetails.confirmpassword === userDetails.password)) {
      setCpasswordmessage("password not matched");
      setCpasswordError(true);
    } else {
      setCpasswordmessage("");
      setCpasswordError(false);
    }

    if (!(firstnameError || lastnameError || emailError || passwordError)) {
      SignupSuccess(userDetails);
    }
  };
  return (
    <>
      <div className="Main-Container">
        <div className="ContainerFirst">
          <div className="logoclass">
            <img src={logo} alt="logo" className="logo1" />
            <p className="Pclass">Create your FundooNote App</p>
          </div>

          <div className="flexDiv">
            {/* <input type="text" name="First name" placeholder="First name" className="signup-input "/> */}
            <TextField
              // id="outlined-basic"
              name="firstname"
              value={userDetails.firstname}
              onChange={handleChange}
              label="First name"
              variant="outlined"
              className="signup-input "
              size="small"
              error={firstnameError}
              helperText={firstnamemessage}
            />
            <TextField
              // id="outlined-basic"
              name="lastname"
              value={userDetails.lastname}
              onChange={handleChange}
              label="Last name"
              variant="outlined"
              className="signup-input "
              size="small"
              error={lastnameError}
              helperText={lastnamemessage}
            />
          </div>
          <div className="EmailInput">
            {/* <input
              className="EmailInputTag"
              type="text"
              name="Email"
              placeholder="Email Id"
            /> */}
            <TextField
              // id="outlined-basic"
              name="email"
              value={userDetails.email}
              onChange={handleChange}
              label="Email"
              variant="outlined"
              size="small"
              className="EmailInputTag"
              error={emailError}
              helperText={emailmessage}
            />
          </div>
          <div className="flexDiv">
            {/* <input
              type="text"
              name="Password"
              placeholder="Password"
              className="signup-input "
            /> */}
            <TextField
              // id="outlined-basic"
              name="password"
              value={userDetails.password}
              onChange={handleChange}
              label="Password"
              variant="outlined"
              className="signup-input "
              size="small"
              type="password"
              error={passwordError}
              helperText={passwordmessage}
            />
            <TextField
              // id="outlined-basic"
              name="confirmpassword"
              value={userDetails.confirmpassword}
              onChange={handleChange}
              label="Confirm Password"
              variant="outlined"
              className="signup-input "
              size="small"
              type="password"
              error={cpasswordError}
              helperText={cpasswordmessage}
            />
            {/* <input
              type="text"
              name="Confirm Password"
              placeholder="Confirm Password"
              className="signup-input "
            /> */}
          </div>
          <span className="password-helper">
            Use 8 or more characters with a mix of letters, numbers & symbols
          </span>

          <div className="SignIn">
            <a href="/">Sign in instead</a>
            <button type="submit" className="ButtonCreate">
              <a href="#" onClick={handleCreate}>
                Create
              </a>
            </button>
          </div>
        </div>

        <div className="containerSecond">
          <img className="acclogo" src={acclogo} alt="acclogo" />
        </div>
      </div>
    </>
  );
}
export default Signup;
