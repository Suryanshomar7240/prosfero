// import './App.css';
import React from 'react';
import Nav from './components/header/Nav';
import Homepage from './components/homepage/Homepage';
import Footer from './components/footer/Footer';

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Homepage />
      <Footer />
    </React.Fragment>
  );
}

export default App;
