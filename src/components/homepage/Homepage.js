import React from 'react';
import './homepage.css';
import donate_image from '../../assets/donate.png';

const Homepage = () => {
  return (
    <div id="home">
      <section className='intro'
      //  style={{backgroundImage:`url(${donate_image})`}}
       >
        <div className='intro_left'>
          <img src={donate_image} alt='Donate' />
        </div>
        <div className='intro_right'>
          <h1 className='home_head'>Play your role in a constructive cause.</h1>
          <h2 className='home_subhead'>
            Donate to or start a fundraiser today.
          </h2>
          <div className='button_wrapper'>
            <button className='to_donate_page'>Contribute Today</button>
          </div>

          <h2 className='home_subhead_sm'>
              We believe in complete transparency. Get a tab of every transaction made with your money.
          </h2>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
