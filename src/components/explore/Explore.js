import React from 'react';
import './explore.css';
import eq from '../../assets/farmer3.jpg';
import DonationCard from '../donationCards/DonationCard';
import { useState } from 'react';

const Explore = () => {
  const [options, setOptions] = useState('all');

  const handleChange = (e) => {
    setOptions(e.target.value);
  };
  // console.log(options);

  return (
    <div>
      <div className='exploreImgContainer'>
        <img src={eq} alt='earthquake' />
        <h1 className='exploreImgText'>Help A Needy Today</h1>
      </div>

      <div className='secondaryOptionsMenu'>
        <div className='catHeading'>Categories</div>
        <form id='options'>
          <select className='selectOptions' onChange={handleChange}>
            <option value='all'>All Categories</option>
            <option value='edu'>Education</option>
            <option value='med'>Medical</option>
            <option value='dis'>Disaster Relief</option>
            <option value='ani'>Animal Welfare</option>
            <option value='oth'>Other Causes</option>
          </select>
        </form>
      </div>

      <div className='mainBodyWrapper'>
        <div className='leftNavbar'>
          <div className='categoriesHeading'>Categories</div>
          <div className='categoriesContainer'>
            <button className='leftNavbarElement'>Education</button>
            <button className='leftNavbarElement'>Medical</button>
            <button className='leftNavbarElement'>Disaster Relief</button>
            <button className='leftNavbarElement'>Animal Welfare</button>
            <button className='leftNavbarElement'>Other Causes</button>
          </div>
        </div>
        <div className='exploreCardsContainer'>
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
          <DonationCard
            imgLink='https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'
            userImg='https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'
            userName='yash'
            orgName='Gareeb Foundation'
            progress='90000'
            required='100000'
            width='primary'
          />
        </div>
      </div>
    </div>
  );
};

export default Explore;
