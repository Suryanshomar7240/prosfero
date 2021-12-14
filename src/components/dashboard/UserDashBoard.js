import React from "react";
import "./UserDashBoard.css";
import DonationCard from "../donationCards/DonationCard";
import { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import dummy_data from "./dummy_data";
const UserDashBoard = () => {
  const size=5;
  const [carasoulState, SetcarasoulState] = useState(0);
  const HandleNext = () => {
    if (carasoulState === size-1) {
      SetcarasoulState(0);
    } else {
      SetcarasoulState(carasoulState + 1);
    }
  };
  const HandlePrev = () => {
    if (carasoulState === 0) {
      SetcarasoulState(size-1);
    } else {
      SetcarasoulState(carasoulState - 1);
    }
  };
  return (
    <div className="dashboard">
      <div className="User_name">Hello,Suryansh :)</div>
      <div className="User-fundraiser">
        <div className="User_funds_head">Your running Fundraisers</div>
        <div className="User_funds_carasoul">
          <div className="User_funds_next_arrow" onClick={HandleNext}>
            <AiOutlineLeft />
          </div>
          <div className="User_funds_donationCards">
            {dummy_data.map((item, index) => {
              if (index === (carasoulState - 1))
                return (
                  <DonationCard
                    key={index}
                    imgLink={item.imgLink}
                    userName={item.userName}
                    userImg={item.userImg}
                    orgName={item.orgName}
                    progress={item.progress}
                    required={item.required}
                    width='secondary'
                  />
                );
              else if(carasoulState===0)
                return (<div></div>);
              if (index === carasoulState)
                return (
                  <DonationCard
                    imgLink={item.imgLink}
                    userName={item.userName}
                    userImg={item.userImg}
                    orgName={item.orgName}
                    progress={item.progress}
                    required={item.required}
                    width='primary'
                  />
                );
              else if (
                index === (carasoulState + 1)
              )
                return (
                  <DonationCard
                    imgLink={item.imgLink}
                    userName={item.userName}
                    userImg={item.userImg}
                    orgName={item.orgName}
                    progress={item.progress}
                    required={item.required}
                    width='secondary'
                  />
                );
              else return <div></div>;
            })}
          </div>
          <div className="User_funds_prev_arrow" onClick={HandlePrev}>
            <AiOutlineRight />
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserDashBoard;
