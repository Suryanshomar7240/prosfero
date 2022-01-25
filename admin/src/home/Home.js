import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../card/Card';
import './home.css';

const Home = () => {
  const [fundraisers, setFundraisers] = useState([]);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

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

  const getUserData = (id) => {
    return axios.get(`http://localhost:5000/user/dashboard/${id}`);
  };

  useEffect(() => {
    getActiveFundraiser()
      .then((active) => getDashboardData(active.data))
      .then((dash) => setFundraisers(dash));
  }, []);

  return (
    <div>
      <div className='container'>
        {fundraisers.map((data, value) => {
          getUserData(data.createdby).then((res) => {
            setUserName(res.data.firstname);
            setUserEmail(res.data.email)
          });

          return (
            <Card
              key={value}
              orgName={data.orgName}
              imgLink={data.photoUrl}
              userImg={data.photoUrl}
              userName={userName}
              progress={data.moneyCollected}
              required={data.targetMoney}
              userid = {data._id}
              useremail = {userEmail}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
