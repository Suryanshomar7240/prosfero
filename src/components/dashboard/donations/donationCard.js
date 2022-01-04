import React from 'react';
const Donation= (props) => {
  return (
    <>
      <div className='card_wrapper user_donation'>
        <div className='img_container'>
          <img src={props.imgLink} alt='donation' />{' '}
        </div>
        <div className='card_title'>{props.orgName}</div>
        <div className='userDetail'>
          <img src={props.userImg} alt={props.userName} />
          <span className='userName'>By {props.userName}</span>
        </div>
        <div className="amt_user_donated">Your Donation : <span className='money'>{props.AmtDonated}₹</span></div>
        <div className="percentage_user_donated">Your Percentage Donation : <span className='money'> {(props.AmtDonated / props.required) * 100}%</span></div>
        <span className='collection'>
          <span className='money'>₹{props.progress}</span> raised out of{' '}
          <span className='money'>₹{props.required}</span>
        </span>
        <div class='progress'>
          <div
            class='progress-bar'
            role='progressbar'
            style={{ width: (props.progress / props.required) * 100 + '%' , backgroundColor: "#318CE7"}}
            aria-valuenow='25'
            aria-valuemin='0'
            aria-valuemax='100'
          >{(props.progress / props.required) * 100 }%</div>
        </div>
        <button className="donate_button">Donate More</button>
      </div>
    </>
  );
};

export default Donation;
