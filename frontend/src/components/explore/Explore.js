import React from 'react';
import './explore.css';
import eq from '../../assets/farmer3.jpg';
import DonationCard from '../donationCards/DonationCard';
import { useState, useEffect } from 'react';
import axios from 'axios';

// https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg

/*     {
      orgName: '',
      bio: '',
      photoUrl: '',
      targetMoney: '',
      moneyCollected: '',
      upiMobile: '',
      active: false,
      createdby: '',
      type: '',
      creator_pfp: '',
      username: '',
    },*/

const Explore = () => {
  const [options, setOptions] = useState('all');
  const [fundraisers, setFundraisers] = useState([]);
  const [userName, setUserName] = useState('');

  const getActiveFundraiser = () => {
    return axios.get('http://localhost:5000/fundraiser/active');
  };

  const getDashboardData = (data) => {
    return Promise.all(
      data.map((fr) => {
        return fr;
      })
    );
  };

  useEffect(() => {
    getActiveFundraiser()
      .then((active) => getDashboardData(active.data))
      .then((dash) => setFundraisers(dash));
  }, []);

  const getUserData = (id) => {
    return axios.get(`http://localhost:5000/user/dashboard/${id}`);
  };

  const handleChange = (e) => {
    setOptions(e.target.value);
  };

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
            <option value='education'>Education</option>
            <option value='medical'>Medical</option>
            <option value='disaster'>Disaster Relief</option>
            <option value='animal'>Animal Welfare</option>
            <option value='other'>Other Causes</option>
          </select>
        </form>
      </div>

      <div className='mainBodyWrapper'>
        <div className='leftNavbar'>
          <div className='categoriesHeading'>Categories</div>
          <div className='categoriesContainer'>
            <button
              className='leftNavbarElement'
              value='education'
              onClick={handleChange}
            >
              Education
            </button>
            <button
              className='leftNavbarElement'
              value='medical'
              onClick={handleChange}
            >
              Medical
            </button>
            <button
              className='leftNavbarElement'
              value='disaster'
              onClick={handleChange}
            >
              Disaster Relief
            </button>
            <button
              className='leftNavbarElement'
              value='animal'
              onClick={handleChange}
            >
              Animal Welfare
            </button>
            <button
              className='leftNavbarElement'
              value='other'
              onClick={handleChange}
            >
              Other Causes
            </button>
          </div>
        </div>
        <div className='exploreCardsContainer'>
          {fundraisers.map((data, value) => {
            getUserData(data.createdby).then((res) => {
              setUserName(res.data.firstname);
            });
            if (options === 'all' || options === data.type) {
              return (
                <DonationCard
                  key={value}
                  orgName={data.orgName}
                  imgLink={data.photoUrl}
                  userImg={data.photoUrl}
                  userName={userName}
                  progress={data.moneyCollected}
                  required={data.targetMoney}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Explore;
