import axios from "axios";

export const SignupApi = (userdata) => {
  // let response = axios.post(
  //   "http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp",
  //   userdata
  // );
  let response = axios.post("http://localhost:3000/api/v1/users", userdata);
  // return response;
  console.log(response);
};

export const SigninApi = (login) => {
  // let response = axios.post(
  //   "http://fundoonotes.incubation.bridgelabz.com/api/user/login",
  //   login
  // );
  let response = axios.post("http://localhost:3000/api/v1/users/login", login);

  return response;
  // console.log(response);
};
