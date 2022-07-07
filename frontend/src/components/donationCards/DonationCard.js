import React from 'react';
import './donationCard.css';
import axios from 'axios';
function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const displayRazorpay = async (fundId) => {
  const donor_id = localStorage.getItem('token');

  const sdk_status = await loadScript(
    'https://checkout.razorpay.com/v1/checkout.js'
  ); // load the razorpay sdk

  if (!sdk_status) {
    alert(
      'Razorpay SDK failed to load. Please check your network and try again'
    );
  }

  const post_data = {
    user: donor_id,
    amount: 500,
  };
  console.log(post_data);
  const payment_data = await axios
    .post('https://prosfero-backend.herokuapp.com/payment/pay', post_data) // Initiate an order in the backend and get the details of the order
    .then((r) => r.data);

  console.log(payment_data);

  const payment_options = {
    key: 'rzp_test_xfRpOzB2d3bt4z',
    currency: payment_data.currency,
    amount: payment_data.amount.toString(),
    order_id: payment_data.id,
    name: 'Donation',
    description: 'Thank you for your donation',
    image: 'https://i.postimg.cc/mZzc6ydX/logo.png',
    handler: function (response) {
      const data = {
        created_by: donor_id,
        r_payment_id: response.razorpay_payment_id,
        r_order_id: response.razorpay_order_id,
        r_signature: response.razorpay_signature,
        fundraiser_id: fundId,
      };
      const update_data = {
        amount: payment_data.amount / 100,
        donated_by: donor_id,
        fund_id: fundId,
      };
      axios.post('https://prosfero-backend.herokuapp.com/payment/add', data);
      axios.post(
        'https://prosfero-backend.herokuapp.com/donation/updatedonation',
        update_data
      );
      alert("Donated successfully")
      window.location.reload()
    },
    prefill: {
      name: 'Yash',
      email: 'daddy_cool@gmail.com',
      phone_number: '9899999999',
    },
  };
  const paymentObject = new window.Razorpay(payment_options);
  paymentObject.open();
};

const DonationCard = (props) => {
  

  return (
    <React.Fragment>
      <div className={'card_wrapper ' + props.width}>
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
        <div className='progress'>
          <div
            className='progress-bar'
            role='progressbar'
            style={{
              width: (props.progress / props.required) * 100 + '%',
              backgroundColor: '#318CE7',
            }}
            aria-valuenow='25'
            aria-valuemin='0'
            aria-valuemax='100'
          ></div>
        </div>
        <button
          className='donate_button'
          onClick={() => {
            displayRazorpay(props.fundId);
          }}
        >
          Donate
        </button>
      </div>
    </React.Fragment>
  );
};

export default DonationCard;
export {displayRazorpay};