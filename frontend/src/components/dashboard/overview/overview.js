import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import Fundraiser from "../fundraiser/FundraiserCard";
import Donation from "../donations/donationCard";
import "./overview.css";
import axios from "axios";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 2 },
];

const Overview = (prop) => {
  const [fundraiser, setFundraiser] = useState({
    imgLink: "",
    userImg: "",
    orgName: "",
    targetMoney: 0,
    moneyCollected: 0,
    bio: "",
  });
  const [nofund, setnoFund] = useState(true);
  useEffect(() => {
    axios.get(`http://localhost:5000/fundraiser/${prop.userid}`).then((res) => {
      if (res.data.length === 0);

      else {
        setnoFund(false);
        setFundraiser({
          imgLink: res.data[0].photoUrl,
          targetMoney: res.data[0].targetMoney,
          moneyCollected: res.data[0].moneyCollected,
          bio: res.data[0].bio,
          orgName: res.data.orgName,
        });
      }
    });

  }, [prop]);

  return (
    <div className="Dashboard-content">
      <div className="User_funds_head">Yours Recent Running Fundraisers</div>

    {nofund?
      <Fundraiser
        imgLink={fundraiser.imgLink}
        userImg="https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jp"
        userName={prop.userid}
        orgName={fundraiser.orgName}
        progress={fundraiser.moneyCollected}
        required={fundraiser.targetMoney}
        FundName="Snicker"
      />:<></>
    }

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
};

export default Overview;
