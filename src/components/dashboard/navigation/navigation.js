import React from 'react'
import {AiFillMoneyCollect,AiFillProfile} from 'react-icons/ai';
import {BiDonateHeart} from 'react-icons/bi';
import './navigation.css';

const navigation = () => {
    return (
        <ul className="navigation-list">
            <li className="navigation-items">
              <a href="/user/overview">Overview</a>
            </li>
            <li className="navigation-items">
              <a href="/user/fundraiser"><AiFillMoneyCollect />Fundraisers</a>
            </li>
            <li className="navigation-items">
              <a href="/user"><BiDonateHeart />Donations</a>
            </li>
            <li className="navigation-items">
              <a href="/user"><AiFillProfile />Profile Update</a>
            </li>
          </ul>
    )
}

export default navigation