import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../card/Card';
import './home.css';
import Cookies from 'js-cookie';

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
    // const token = Cookies.get('jwt');
    // console.log(token)
    // axios
    //   .post('http://localhost:5000/admin/validate', token)
    //   .then((res) => {
    //     if (res.status === 400) {
    //       window.location.assign('/login');
    //       console.log("here")
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    getActiveFundraiser()
      .then((active) => getDashboardData(active.data))
      .then((dash) => setFundraisers(dash));
  }, []);

  return (
    <div>
      <div className='container'>
        {fundraisers.map((data, value) => {
          getUserData(data.createdby).then((res) => {
            {console.log(res.data)}
            setUserName(res.data.firstname);
            setUserEmail(res.data.email);
          }).catch(err => console.log(err));

          return (
            <Card
              key={value}
              orgName={data.orgName}
              imgLink={data.photoUrl}
              userImg={data.photoUrl}
              userName={userName}
              progress={data.moneyCollected}
              required={data.targetMoney}
              userid={data._id}
              useremail={userEmail}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
