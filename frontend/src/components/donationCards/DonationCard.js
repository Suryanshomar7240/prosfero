import React from 'react';
import './donationCard.css';
import axios from 'axios';
const DonationCard = (props) => {
  // const [verifed, setverify] = useState(false);
  // const donate = () => {
  //   const id_token = localStorage.getItem("id_token");
  //   const userid = localStorage.getItem("userId");
  //   console.log(userid);

  //   if (id_token == null || userid == null) {
  //     alert("You have to login first to donate fundraisers");
  //   } else {
  //     const donate_data = {
  //       userId: userid,
  //       fundId: props.fundId,
  //       money: 0,
  //     };
  //     axios
  //       .post("http://localhost:5000/donation/", donate_data)
  //       .then((res) => window.alert(res.data.message))
  //       .catch((err) => console.log(err));
  //   }
  // };

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

  const displayRazorpay = async () => {
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

    const payment_data = await axios
      .post('http://localhost:5000/payment/pay', post_data) // Initiate an order in the backend and get the details of the order
      .then((r) => r.data);

    console.log(payment_data)

    const payment_options = {
      key: 'rzp_test_xfRpOzB2d3bt4z',
      currency: payment_data.currency,
      amount: payment_data.amount.toString(),
      order_id: payment_data.id,
      name: 'Donation',
      description: 'Thank you for nothing. Please give us some money',
      image: 'https://i.postimg.cc/mZzc6ydX/logo.png',
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: "Yash",
        email: 'sdfdsjfh2@ndsfdf.com',
        phone_number: '9899999999',
      }
    };
    const paymentObject = new window.Razorpay(payment_options)
    paymentObject.open()
  };

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
        <button className='donate_button' onClick={displayRazorpay}>
          Donate
        </button>
      </div>
    </React.Fragment>
  );
};

export default DonationCard;
