import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import './login.css';

const Login = () => {
  const [data, setData] = useState({ username: '', password: '' });
  // const [loggedIn, setLoggedIn] = useState(false);

  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    console.log(data);
    e.preventDefault();

    axios
      .post('http://localhost:5000/admin/login', data)
      .then(() => {
        window.location.assign('/admin/home');
      })
      .catch((err) => {
        console.log(`Incorrect username or Password. Error: ${err}`);
      });
  };

  return (
    <div className='loginContainer'>
      <form className='box' onSubmit={handleSubmit}>
        <h1>Login </h1>
        <input
          type='text'
          name='username'
          placeholder='Username'
          onChange={handleInput}
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          onChange={handleInput}
        />
        <input type='submit' name='' value='Login' />
      </form>
    </div>
  );
};

export default Login;
