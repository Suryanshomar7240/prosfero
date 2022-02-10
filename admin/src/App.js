import React from 'react';
import Home from './home/Home';
import Login from '../src/login/Login';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';

const App = () => {
  const isAuth=localStorage.getItem("isAuthenticated");
  return (
    <BrowserRouter>
      <Route exact path='/'>
        {isAuth? <Redirect to='/admin/home' /> : <Redirect to='/login' />}
      </Route>
      <Route path='/login' exact component={Login} />

      <Route path='/admin/home' exact component= {isAuth?Home:Login}/>
    </BrowserRouter>
  );
};

export default App;
