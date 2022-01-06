import React from 'react';
import './donationCard.css';

const DonationCard = (props) => {
  return (
    <React.Fragment>
      <div className={'card_wrapper '+props.width}>
        <div className='img_container'>
          <img src={props.imgLink} alt='donation' />{' '}
        </div>
        <div className='card_title'>{props.orgName}</div>
        <div className='userDetail'>
          <img src={props.userImg} alt={props.userName} />
          <span className='userName'>By {props.userName}</span>
        </div>
        <span className='collection'>
          <span className='blue'>₹{props.progress}</span> raised out of{' '}
          <span className='blue'>₹{props.required}</span>
        </span>
        <div class='progress'>
          <div
            class='progress-bar'
            role='progressbar'
            style={{ width: (props.progress / props.required) * 100 + '%' , backgroundColor: "#318CE7"}}
            aria-valuenow='25'
            aria-valuemin='0'
            aria-valuemax='100'
          ></div>
        </div>
        <button className="donate_button">Donate</button>
      </div>
    </React.Fragment>
  );
};

export default DonationCard;
