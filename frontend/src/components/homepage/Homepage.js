import React, { useState, useEffect } from 'react';
import './homepage.css';
import axios from 'axios';
import donate_image from '../../assets/donate.png';
import DonationCard from '../donationCards/DonationCard';
import Options from './options/Options';
import Carousel from 'react-elastic-carousel';
import Review from './reviews/Review';
import Feedback from '../feedback/Feedback';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
];

const Homepage = () => {
  const [fundraisers, setFundraisers] = useState([]);
  const [reviews, setReviews] = useState([]);

  const getActiveFundraiser = () => {
    return axios.get(`${process.env.REACT_APP_apiUrl}/fundraiser/active`);
  };

  const getAllReviews = () => {
    return axios.get(`${process.env.REACT_APP_apiUrl}/feedback/get`);
  };

  const resolvePromises = (data) => {
    return Promise.all(
      data.map((fr) => {
        return fr;
      })
    );
  };

  useEffect(() => {
    getActiveFundraiser().then(async (active) => {
      setFundraisers(await resolvePromises(active.data));
    });
    getAllReviews().then(async (active) => {
      setReviews(await resolvePromises(active.data));
    });
  }, []);

  const removefeedback = () => {
    const homepage = document.querySelector('.Homepage');
    homepage.classList.remove('blury');
    document.querySelector('.feedback').classList.add('display_none');
    document.querySelector('.footer').classList.remove('display_none');
    document.querySelector('.Homepage').classList.remove('Homepage_off');
  };

  const feedbackButton = () => {
    const homepage = document.querySelector('.Homepage');
    homepage.classList.add('blury');
    document.querySelector('.feedback').classList.remove('display_none');
    document.querySelector('.footer').classList.add('display_none');
    document.querySelector('.Homepage').classList.add('Homepage_off');
  };
  return (
    <div id='home'>
      <div className='feedback display_none'>
        <Feedback removefeedback={removefeedback} />
      </div>
      <div className='Homepage'>
        <section className='intro'>
          <div className='intro_left'>
            <img src={donate_image} alt='Donate' />
          </div>
          <div className='intro_right'>
            <h1 className='home_head'>
              Play your role in a constructive cause.
            </h1>
            <h2 className='home_subhead'>
              Donate to or start a fundraiser today.
            </h2>
            <div className='button_wrapper'>
              <button
                className='to_donate_page'
                onClick={() => {
                  window.location = '/explore/all';
                }}
              >
                Contribute Today
              </button>
            </div>

            <h2 className='home_subhead_sm'>
              We believe in complete transparency. Get a tab of every
              transaction made with your money.
            </h2>
          </div>
        </section>

        <section id='homepageDonationCards'>
          <div className='options_heading'>
            <h2 className='head_one'>Most Active Fundraisers</h2>
          </div>
          <h4 className='sub_head_one'>
            Contribute today to someone who is in a dire need of your help
          </h4>
          <Carousel breakPoints={breakPoints}>
            {fundraisers.map((data, value) => {
              return (
                <DonationCard
                  key={value}
                  orgName={data[0].fundraisers.orgName}
                  imgLink={data[0].fundraisers.photoUrl}
                  userImg={data[0].user.userpfp}
                  userName={data[0].user.username}
                  progress={data[0].fundraisers.moneyCollected}
                  required={data[0].fundraisers.targetMoney}
                  fundId={data[0].fundraisers._id}
                />
              );
            })}
          </Carousel>
          <div className='btn_container'>
            <button
              className='to_donate_page'
              onClick={() => {
                window.location = '/explore/all';
              }}
            >
              {' '}
              &nbsp; Explore More &nbsp;
            </button>
          </div>
        </section>

        <section id='funding_options_container'>
          <div className='options_heading'>
            <h2 className='head_one'>Raise funds for any of these causes</h2>
            <div>
              <h4 className='sub_head_one'>
                We help you for your personal needs, enable you to work for a
                social cause. You can rely on us for your fundraisers
              </h4>
            </div>
            <Options />
          </div>
        </section>

        <section id='reviewsContainer'>
          <div className='options_heading'>
            <h2 className='head_one'>What people who used our platform say</h2>
            <div>
              <h4 className='sub_head_one'>
                Your reviews are really valuable to us. They help us improve our
                shortcomings so that we can make the application better for you
              </h4>
              <br />
              <br />
            </div>
          </div>
          <Carousel breakPoints={breakPoints}>
            {reviews.map((data, value) => {
              return (
                <Review
                  key={value}
                  pfpLink={data.pfplink}
                  username={data.username}
                  reviewText={data.message}
                  rating={data.rating}
                />
              );
            })}
          </Carousel>
          <div className='btn_container'>
            <button className='to_donate_page' onClick={feedbackButton}>
              {' '}
              &nbsp; Submit your feedback &nbsp;
            </button>
          </div>
        </section>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Homepage;
