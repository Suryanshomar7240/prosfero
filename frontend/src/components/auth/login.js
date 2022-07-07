import React from 'react';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';
require('dotenv').config();

const clientid =
  '494122328651-o69tn42mgbdgb5nqoa8gorvild1lt4u6.apps.googleusercontent.com';

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
    const profile = res.getBasicProfile();
    const id_token = res.getAuthResponse().id_token;
    const firstname = profile.getGivenName();
    const lastname = profile.getFamilyName();
    const email = profile.getEmail();
    const userid = profile.getId();
    const pfp_url=profile.getImageUrl();

    localStorage.setItem('token', userid);
    localStorage.setItem('id_token', id_token);
    
    localStorage.setItem('isAuthenticated',true);
    
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
    
    axios
      .post('http://localhost:5000/user/login', data)
      .then((response) => {
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
