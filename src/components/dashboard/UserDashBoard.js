import React from 'react';
import './UserDashBoard.css';
import DonationCard from '../donationCards/DonationCard';
import { useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import dummy_data from './dummy_data';
const UserDashBoard = () => {
  const [carasoulState, SetcarasoulState] = useState(0);
  const HandleNext = () => {
    if (carasoulState === 4) {
      SetcarasoulState(0);
    } else {
      SetcarasoulState(carasoulState + 1);
    }
  };
  const HandlePrev = () => {
    if (carasoulState === 0) {
      SetcarasoulState(4);
    } else {
      SetcarasoulState(carasoulState - 1);
    }
  };
  return (
    <div className='dashboard'>
      <div className='User-fundraiser'>
        <div className='User_funds_head'>Your running Fundraisers</div>
        <div className='User_funds_carasoul'>
          <div className='User_funds_next_arrow' onClick={HandleNext}>
            <AiOutlineLeft />
          </div>
          <div className='User_funds_donationCards'>
            {dummy_data.map((item, index) => {
                if (index === carasoulState)
                  return (
                    <DonationCard
                      imgLink={item.imgLink}
                      userName={item.userName}
                      userImg={item.userImg}
                      orgName={item.orgName}
                      progress={item.progress}
                      required={item.required}
                    />
                  );
                else return(<div></div>); 
            }
              
            )}
          </div>
          <div className='User_funds_prev_arrow' onClick={HandlePrev}>
            <AiOutlineRight />
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserDashBoard;