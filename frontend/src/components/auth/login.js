import React from 'react';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';

const clientid =
  '164103917734-69vt13rut8unj21kf48ledmfs28dop7r.apps.googleusercontent.com';

const Login = () => {
  const handleOnSuccess = (res) => {

    const dashborad = document.querySelector("#dashboard")
    dashborad.classList.remove("dpNone")

    // console.log( "damn -> " + res.getAuthResponse().id_token);
    const profile = res.getBasicProfile();
    const id_token = res.getAuthResponse().id_token;
    // console.log(profile);
    const firstname = profile.getGivenName();
    const lastname = profile.getFamilyName();
    const email = profile.getEmail();
    const userid = profile.getId();
    const pfp_url = profile.getImageUrl()
    // console.log(firstname,lastname,email,userid)

    const data = {
      id_token: id_token,
      firstname: firstname,
      lastname: lastname,
      email: email,
      userid: userid,
      pfp_url: pfp_url,
    };

    axios
      .post('http://localhost:5000/user/login', data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const handleOnFailure = (res) => {
    console.log(`[Login failed] response: ${res}`);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientid}
        buttonText='Login'
        onSuccess={handleOnSuccess}
        onFailure={handleOnFailure}
        cookiePolicy='single_host_origin'
        isSignedIn={true}
      />
    </div>
  );
};

export default Login;
