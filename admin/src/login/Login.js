import React,{useState} from "react";
import "./login.css";
import axios from "axios";
import { TiDeleteOutline } from 'react-icons/ti';
const Login = () => {

  const [creditnals,setCreditnals]=useState({username:'',password:''});
  const handleInputs = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setCreditnals({ ...creditnals, [name]: value });
  };

  const handleSubmit = async () => {
    axios
      .post('http://localhost:5000/admin/login', creditnals)
      .then((res) => {
        window.location="/admin/home"
        localStorage.setItem("isAuthenticated","true");
      })
      .catch((err) => {
        console.log(err + 'error');
      }); 
  };
  return (
    
    <div className="main">
      {/* <div className="login_error">
        Incorrect Username or Password
        <TiDeleteOutline className="login_cross"/>
      </div> */}
      <div className="wrapper">
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

          <button className="login_btn" type="submit" onClick={handleSubmit}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
