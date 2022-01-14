import React from 'react';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';
require('dotenv').config();

const clientid =
  '164103917734-69vt13rut8unj21kf48ledmfs28dop7r.apps.googleusercontent.com';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uId: '',
    };
  }

  handleOnSuccess = (res) => {
    const dashboard = document.querySelector('#dashboard');
    dashboard.classList.remove('dpNone');

    // console.log( "damn -> " + res.getAuthResponse().id_token);
    const profile = res.getBasicProfile();
    const id_token = res.getAuthResponse().id_token;
    // console.log(profile);
    const firstname = profile.getGivenName();
    const lastname = profile.getFamilyName();
    const email = profile.getEmail();
    const userid = profile.getId();
    // console.log(firstname,lastname,email,userid)
    // this.setState({uId : userid});

    localStorage.setItem('token', userid);
    localStorage.setItem('id_token', id_token);

    const data = {
      id_token: id_token,
      firstname: firstname,
      lastname: lastname,
      email: email,
      userid: userid,
    };

    this.props.SetAuth(true);
    this.props.Setuserid(userid);
    axios
      .post('http://localhost:5000/user/login', data)
      .then((res) => {
        console.log('Login successful');
      })
      .catch((err) => console.log(err));
  };

  handleOnFailure(res) {
    console.log(`[Login failed] response: ${res}`);
  }

  render() {
    return (
      <div>
        <GoogleLogin
          clientId={clientid}
          buttonText='Login'
          onSuccess={this.handleOnSuccess}
          onFailure={this.handleOnFailure}
          cookiePolicy='single_host_origin'
          isSignedIn={true}
        />
      </div>
    );
  }
}

export default Login;
