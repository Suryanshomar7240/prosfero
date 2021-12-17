import React from "react";
import "./UserDashBoard.css";
// import donation from 'https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg';
// import DonationCard from "../donationCards/DonationCard";
// import { useState } from "react";
// import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
// import dummy_data from "./dummy_data";
const UserDashBoard = () => {
  return (
    <div className="dashboard">
      <div className="User_name">Hello,Suryansh :)</div>
      <div className="User-fundraiser">
        <div className="Dashboard-navigation">
          <ul className="navigation-list">
            <li className="navigation-items">
              <a href="/user">Overview</a>
            </li>
            <li className="navigation-items">
              <a href="/user">Fundraisers</a>
            </li>
            <li className="navigation-items">
              <a href="/user">Donations</a>
            </li>
            <li className="navigation-items">
              <a href="/user">Profile Update</a>
            </li>
          </ul>
        </div>
        <div className="Dashboard-content">
          <div className="User_funds_head">
            Yours Recent Running Fundraisers
          </div>
          <div className="User_recent_fund_card">
            <div className="Card_left">
              <img
                src="https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
                alt="donation"
              />
              <div className="userDetail"></div>
            </div>
            <div className="Card_right">
              <div><img
                src="https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
                alt="Joshraj"
              />
              <span className="userName">By Suryansh</span></div>
              <div className="fund_Target">Target : <span className="money">10000</span></div>
              <div className="fund_amount">Target acheived : <span className="money">5000</span></div>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{
                    width: (5000 / 10000) * 100 + "%",
                    backgroundColor: "#318CE7",
                  }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserDashBoard;
