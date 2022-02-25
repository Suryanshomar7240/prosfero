import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { TiDeleteOutline } from "react-icons/ti";
const Login = () => {
  const [creditnals, setCreditnals] = useState({ username: "", password: "" });
  const handleInputs = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setCreditnals({ ...creditnals, [name]: value });
  };

  const handleSubmit = async () => {
    axios
      .post("http://localhost:5000/admin/login", creditnals)
      .then((res) => {
        window.location = "/admin/home";
        localStorage.setItem("isAuthenticated", "true");
      })
      .catch((err) => {
        const login_msg=document.querySelector(".login_error");
        login_msg.classList.remove("display_none");
        console.log(err)
      });
  };

  const remove_err=()=>{
    const login_msg=document.querySelector(".login_error");
        login_msg.classList.add("display_none");
  }
  return (
    <React.Fragment>
    <div className="main">
      <div className="wrapper">
      <div className="login_error display_none">
        <h5>Incorrect Username or Password</h5>
        <TiDeleteOutline className="login_cross" onClick={remove_err}/>
      </div>
        <div className="content">
          <div className="buttons">
            <div className="close"></div>
            <div className="minimize"></div>
            <div className="zoom"></div>
          </div>

          <h2 className="login_head">ADMIN</h2>
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            required
            onChange={handleInputs}
          />
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            required
            onChange={handleInputs}
          />

          <button className="login_btn" type="submit" onClick={handleSubmit}>
            Login
          </button>
        </div>
      </div>
    </div>
    </React.Fragment>
  );
};

export default Login;
