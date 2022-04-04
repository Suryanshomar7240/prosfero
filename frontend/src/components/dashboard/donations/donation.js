import React from "react";
import Donation from "./donationCard";
import "./donation.css";
const Donations = (prop) => {
  const donation = prop.donation;
  return (
    <div className="Donation_grid Dashboard-content">
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
    </div>
  );
};

export default Donations;
