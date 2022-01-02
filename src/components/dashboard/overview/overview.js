import React from "react";
import Carousel from "react-elastic-carousel";
import Fundraiser from "../fundraiser/FundraiserCard";
import Donation from "../donations/donationCard";
import './overview.css';
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 2 },
];
const Overview = () => {
  return (
    <div className="Dashboard-content">
      <div className="User_funds_head">
        Yours Recent Running Fundraisers
      </div>
      <Fundraiser imgLink="https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
        userImg="https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
        userName="yash"
        orgName="Gareeb Foundation"
        progress="90000"
        required="100000"
        FundName="For Medical Camp"
      />
      <div className="User_donations">
        <div className="User_funds_head">Your Top Donations</div>
        <Carousel breakPoints={breakPoints}>
          <Donation
            imgLink="https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
            userImg="https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
            userName="yash"
            orgName="Gareeb Foundation"
            progress="90000"
            required="100000"
            AmtDonated="100"
            width="primary"
          />

          <Donation
            imgLink="https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
            userImg="https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
            userName="yash"
            orgName="Gareeb Foundation"
            progress="90000"
            required="100000"
            AmtDonated="100"
            width="primary"
          />
          <Donation
            imgLink="https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
            userImg="https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
            userName="yash"
            orgName="Gareeb Foundation"
            progress="90000"
            AmtDonated="100"
            required="100000"
          />
          <Donation
            imgLink="https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
            userImg="https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
            userName="yash"
            orgName="Gareeb Foundation"
            progress="90000"
            required="100000"
            AmtDonated="100"
          />
          <Donation
            imgLink="https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
            userImg="https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
            userName="yash"
            orgName="Gareeb Foundation"
            progress="90000"
            required="100000"
            AmtDonated="100"
          />
          <Donation
            imgLink="https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
            userImg="https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
            userName="yash"
            orgName="Gareeb Foundation"
            progress="90000"
            required="100000"
            AmtDonated="100"
          />
          <Donation
            imgLink="https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
            userImg="https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
            userName="yash"
            orgName="Gareeb Foundation"
            progress="90000"
            required="100000"
            AmtDonated="100"
          />
          <Donation
            imgLink="https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
            userImg="https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
            userName="yash"
            orgName="Gareeb Foundation"
            progress="90000"
            required="100000"
            AmtDonated="100"
          />
        </Carousel>
      </div>
    </div>
  );
}

export default Overview;