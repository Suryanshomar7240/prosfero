import React from "react";
import axios from "axios";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "./firebase";
import "./login.css";
require("dotenv").config();

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uId: "",
    };
  }

  googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    console.log(result);

    const response = result["_tokenResponse"];

    const dashboard = document.querySelector("#dashboard");
    dashboard.classList.remove("dpNone");
    const id_token = response.idToken;
    const firstname = response.firstName;
    const lastname = response.lastName;
    const email = response.email;
    const userid = result["user"].providerData[0].uid;
    const pfp_url = response.photoUrl;
    localStorage.setItem("token", userid);
    localStorage.setItem("id_token", id_token);
    localStorage.setItem("isAuthenticated", true);

    const data = {
      id_token: id_token,
      firstname: firstname,
      lastname: lastname,
      email: email,
      userid: userid,
      pfp_url: pfp_url,
    };

    this.props.SetAuth(true);
    this.props.Setuserid(userid);
    window.location.reload();

    console.log(data);

    axios
      .post(`${process.env.REACT_APP_apiUrl}/user/login`, data)
      .then((response) => {
        console.log("Login successful");
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <button type="button" class="login-with-google-btn" onClick={this.googleSignIn} >
          Sign in
        </button>
      </div>
    );
  }
}

export default Login;
