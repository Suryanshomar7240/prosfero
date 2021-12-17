import React from 'react';
import './homepage.css';
import donate_image from '../../assets/donate.png';
import DonationCard from '../donationCards/DonationCard';
import Options from './options/Options';
import Carousel from 'react-elastic-carousel';
import Review from './reviews/Review';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
];

// const breakPoints2 = [
//   { width: 1, itemsToShow: 1 },
//   { width: 550, itemsToShow: 2 },
//   { width: 768, itemsToShow: 3 },
//   { width: 1200, itemsToShow: 4 },
// ];

const Homepage = () => {
  return (
    <div id='home'>
      <section className='intro'>
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
            We believe in complete transparency. Get a tab of every transaction
            made with your money.
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
        {/* <div className='trendingDonationContainer'> */}
        <Carousel breakPoints={breakPoints}>
          <DonationCard
            imgLink='https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'
            userImg='https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'
            userName='yash'
            orgName='Gareeb Foundation'
            progress='90000'
            required='100000'
            width='primary'
          />
          <DonationCard
            imgLink='https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'
            userImg='https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'
            userName='yash'
            orgName='Gareeb Foundation'
            progress='90000'
            required='100000'
            width='primary'
          />
          <DonationCard
            imgLink='https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'
            userImg='https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'
            userName='yash'
            orgName='Gareeb Foundation'
            progress='90000'
            required='100000'
            width='primary'
          />
          <DonationCard
            imgLink='https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'
            userImg='https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'
            userName='yash'
            orgName='Gareeb Foundation'
            progress='90000'
            required='100000'
            width='primary'
          />
          <DonationCard
            imgLink='https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'
            userImg='https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'
            userName='yash'
            orgName='Gareeb Foundation'
            progress='90000'
            required='100000'
            width='primary'
          />
        </Carousel>
        {/* </div> */}
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
              We value your reviews a lot. They help us improve our shortcomings so that we can make the application better for you
            </h4>
            <br />
            <br />
          </div>
        </div>
        <Carousel breakPoints={breakPoints}>
          <Review
            pfpLink='https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'
            username='Yash'
            reviewHead='Top 10 qoutes by Yash'
            reviewText='If you cant come in her come on her'
          />
          <Review
            pfpLink='https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'
            username='Yash'
            reviewHead='Top 10 qoutes by Yash'
            reviewText='If you cant come in her come on her'
          />
          <Review
            pfpLink='https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'
            username='Yash'
            reviewHead='Top 10 qoutes by Yash'
            reviewText='If you cant come in her come on her'
          />
          <Review
            pfpLink='https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'
            username='Yash'
            reviewHead='Top 10 qoutes by Yash'
            reviewText='If you cant come in her come on her'
          />
        </Carousel>
      </section>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Homepage;
