import React from 'react'
import {AiFillMoneyCollect,AiFillProfile} from 'react-icons/ai';
import {BiDonateHeart} from 'react-icons/bi';
import { Link } from 'react-router-dom';
import './navigation.css';

const navigation = () => {
    return (
        <ul className="navigation-list">
            <li className="navigation-items">
              <a href="/user/">Overview</a>
            </li>
            <li className="navigation-items">
              <Link to="/user/fundraiser"><AiFillMoneyCollect />Fundraisers</Link>
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