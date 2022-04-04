import React, { useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";
import Fundraiser from "../fundraiser/FundraiserCard";
import Donation from "../donations/donationCard";
import "./overview.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 2 },
];

const Overview = (prop) => {
  const donation = prop.donation;
  const fundraiser = prop.fundraiser;

  const [nofund, setnoFund] = useState(true);
  useEffect(() => {
    if (fundraiser.length > 0) setnoFund(false);
  }, [fundraiser]);
  return (
    <div className="Dashboard-content">
      <div className="User_funds_head">Yours Recent Running Fundraisers</div>

      {!nofund ? (
        <Fundraiser
          imgLink={fundraiser[0].photoUrl}
          userName={prop.userid}
          orgName={fundraiser[0].orgName}
          progress={fundraiser[0].moneyCollected}
          required={fundraiser[0].targetMoney}
          FundName={fundraiser[0].orgName}
        />
      ) : (
        <h2 className="Nofund Nofund-padding">
          You didn't raise any fundraiser :(
        </h2>
      )}

      <div className="User_donations">
        <div className="User_funds_head">Your Top Donations</div>
        <Carousel breakPoints={breakPoints}>
          {donation.map((data, value) => {
            return (
              <Donation
                key={value}
                orgName={data[0].fund.orgName}
                imgLink={data[0].fund.photoUrl}
                userImg={data[0].user.userpfp}
                userName={data[0].user.username}
                progress={data[0].fund.moneyCollected}
                required={data[0].fund.targetMoney}
                fundId={data[0].fund._id}
                AmtDonated={data[0].amount}
              />
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Overview;
