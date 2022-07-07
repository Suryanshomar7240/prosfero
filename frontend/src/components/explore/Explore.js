import React,{useEffect,useState} from 'react';
import './explore.css';
import eq from '../../assets/farmer3.jpg';
import DonationCard from '../donationCards/DonationCard';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

const Explore = (prop) => {
  const [options, setOptions] = useState('all');
  const [fundraisers, setFundraisers] = useState([]);

  const getActiveFundraiser = () => {
    return axios.get('https://prosfero-backend.herokuapp.com/fundraiser/active');
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
      .then(async (active) => {
        setFundraisers(await getDashboardData(active.data));
      })

      if(prop.match.params.tag)
      {
        setOptions(prop.match.params.tag)
      }
  }, [prop.match.params.tag]);

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
            if (options === 'all' || options === data[0].fundraisers.type) {
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
            )}
            else{
              return null
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default withRouter(Explore);
