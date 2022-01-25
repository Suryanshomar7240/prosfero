import React from 'react';
import Home from './home/Home';
import Login from '../src/login/Login';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import { useState } from 'react';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

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
