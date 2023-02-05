import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Dashboard from "./Dashboard";

function Navbar(props) {
  return (
    <div className="start">
        <div>
        <img src="https://cdn-user-icons.flaticon.com/75432/75432963/1675546395769.svg?token=exp=1675547297~hmac=ff590e0bff775ed79e872878ef29cc8d" alt="student-img " className="logo" />
        </div>
        <form className="form">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          {!props.isRegistered && (
            <input type="password" placeholder="Confirm Password" />
          )}
          <Link to="/Dashboard"><button type="submit" >{props.isRegistered ? "Login" : "Register"}</button></Link>
        </form>
    </div>
  ); 
}

export default Navbar;

//<img src="https://cdn-user-icons.flaticon.com/73212/73212545/1675533786266.svg?token=exp=1675534687~hmac=f693016e027078abc95f20a9fa92fc2c" alt="student-img " className="logo" />

