// import './App.css';
import React from 'react';
import Nav from './components/header/Nav';
import Homepage from './components/homepage/Homepage';
import Footer from './components/footer/Footer';
import Contact from './components/contactPage/Contact';
import UserDashBoard from './components/dashboard/UserDashBoard';
import Explore from './components/explore/Explore';

import { Route, BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Route path='/' exact component={Homepage} />
      <Route path='/contact' exact component={Contact} />
      <Route path='/user/overview' exact component={UserDashBoard} />
      <Route path='/user/fundraiser' exact component={UserDashBoard} />

      <Route path='/explore' exact component={Explore} />
      {/* <Homepage /> */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
