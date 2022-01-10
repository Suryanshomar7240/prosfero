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
  // const [options, setOptions] = useState('all');
  const [fundraisers, setFundraisers] = useState([]);
  const [userName,setUserName]=useState('');
  // const onload = (() => {


    const getActiveFundraiser=()=>{
      return axios.get('http://localhost:5000/fundraiser/active');
    }

    const getDashboardData=(data)=>{
      return Promise.all(data.map((fr)=>{  
        // return axios.get(`http://localhost:5000/user/dashboard/${fr.createdby}`)
        return fr
      }))
    }
    useEffect(() => {
   getActiveFundraiser()
    .then(active=>getDashboardData(active.data))
   .then((dash=>setFundraisers(dash)))
    }, [])

    const getUserData=(id)=>{
      // console.log( 
        return axios.get(`http://localhost:5000/user/dashboard/${id}`);
        // console.log(res);
      // id
      // );
    }
      // res.data.map((frs,id) => {
        // const data = {
        //   orgName: frs.orgName,
        //   bio: frs.bio,
        //   photoUrl: frs.photoUrl,
        //   targetMoney: frs.targetMoney,
        //   moneyCollected: frs.moneyCollected,
        //   upiMobile: frs.upiMobile,
        //   active: frs.active,
        //   createdby: frs.createdby,
        //   type: frs.type,
        //   creator_pfp: '',
        //   username: '',
        // };
        // axios
        //   .get(`http://localhost:5000/user/dashboard/${frs.createdby}`)
        //   .then((res) => {
        //     data.creator_pfp = res.data.pfp_url;
        //     data.username = res.data.firstname + ' ' + res.data.lastname;
        //     setFundraisers(fundraisers.push(data));
        //     // console.log(fundraisers);
        //   });

      // });
    // });
  // });

  // const handleChange = (e) => {
  //   setOptions(e.target.value);
  // };
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
          <select className='selectOptions'>
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
          {fundraisers.map((data,value)=>{
          getUserData(data.createdby).then((res)=>{
            setUserName(res.data.firstname)});
            return(
              <DonationCard 
              key={value} 
              orgName={data.orgName}
              imgLink={data.photoUrl}
              userImg={data.photoUrl}
              userName={userName}
              progress={data.moneyCollected}
              required={data.targetMoney}
               />
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Explore;
