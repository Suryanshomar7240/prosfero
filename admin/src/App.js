import React from 'react';
import Home from './home/Home';
import Login from '../src/login/Login';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = Cookies.get('jwt');
    axios
      .post('http://localhost:5000/admin/validate', token)
      .then((res) => {
        if (res.status === 200) {
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <BrowserRouter>
      <Route exact path='/'>
        {loggedIn ? <Redirect to='/admin/home' /> : <Redirect to='/login' />}
      </Route>
      <Route path='/login' exact component={Login} />

      <Route path='/admin/home' exact component={Home} />
    </BrowserRouter>
  );
};

export default App;
