import React, { useEffect } from 'react';
import { AiFillMoneyCollect, AiFillProfile } from 'react-icons/ai';
import { BiDonateHeart } from 'react-icons/bi';
import './UserDashBoard.css';
import Overview from './overview/overview';
import Fundraisers from './fundraiser/fundraiser';
import Donations from './donations/donation';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const UserDashBoard = (props) => {
  const userid = props.match.params.id;

  const [params, setParams] = useState({
    username: '',
    email: '',
    pfp_url: '',
    fundraiserDids: [],
  });

  useEffect(() => {
    const overview = document.querySelector('.nav-overview');
    const fundraiser = document.querySelector('.nav-fundraiser');
    const donation = document.querySelector('.nav-Donations');
    const donationpage = document.querySelector('.donation_page');
    const overviewpage = document.querySelector('.overview_page');
    const fundraiserpage = document.querySelector('.fundraiser_page');

    overview.addEventListener('click', () => {
      fundraiserpage.classList.add('display_none');
      donationpage.classList.add('display_none');
      overviewpage.classList.remove('display_none');
    });

    fundraiser.addEventListener('click', () => {
      overviewpage.classList.add('display_none');
      donationpage.classList.add('display_none');
      fundraiserpage.classList.remove('display_none');
    });

    donation.addEventListener('click', () => {
      fundraiserpage.classList.add('display_none');
      overviewpage.classList.add('display_none');
      donationpage.classList.remove('display_none');
    });

    axios
      .get(`http://localhost:5000/user/dashboard/${userid}`)
      .then((res) => {
        setParams({
          username: res.data.firstname + ' ' + res.data.lastname,
          email: res.data.email,
          pfp_url: res.data.pfp_url,
          fundraiserDids: res.data.fundraisersDonatedTo,
        });
      });
  }, [userid]);
  return (
    <div className='dashboard'>
      <div className='User_name'>Hello,{params.username} 👋🏻</div>
      <div className='User-fundraiser'>
        <div className='Dashboard-navigation'>
          <ul className='navigation-list'>
            <li className='navigation-items nav-overview'>Overview</li>
            <li className='navigation-items nav-fundraiser'>
              <AiFillMoneyCollect />
              Fundraisers
            </li>
            <li className='navigation-items nav-Donations'>
              <BiDonateHeart />
              Donations
            </li>
            <li className='navigation-items nav-profile'>
              <AiFillProfile />
              Profile Update
            </li>
          </ul>
        </div>
        <div className='overview_page'>
          <Overview userid={userid}/>
        </div>
        <div className='fundraiser_page display_none'>
          <Fundraisers userid={userid} />
        </div>
        <div className='donation_page display_none'>
          <Donations />
        </div>
      </div>
    </div>
  );
};
export default withRouter(UserDashBoard);
