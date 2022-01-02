import React from "react";
import "./UserDashBoard.css";
import Navigation from "./navigation/navigation";
import Overview from "./overview/overview";
import { Route, BrowserRouter } from 'react-router-dom';
import Fundraisers from "./fundraiser/fundraiser";
import Donations from "./donations/donation";
const UserDashBoard = () => {
  return (
    <div className="dashboard">
      <div className="User_name">Hello,Suryansh :)</div>
      <div className="User-fundraiser">
        <div className="Dashboard-navigation">
          <Navigation />
        </div>
        <BrowserRouter>
          {/* <Route path='' exact component={Overview} /> */}
          {/* <Route path='' exact component={Fundraisers} /> */}
          <Route path='' exact component={Donations} />
        </BrowserRouter>
        {/* <div className="Dashboard-content">
          <div className="User_funds_head">
            Yours Recent Running Fundraisers
          </div>
            <Fundraiser imgLink="https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
                userImg="https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
                userName="yash"
                orgName="Gareeb Foundation"
                progress="90000"
                required="100000"
                width="primary"
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
                AmtDonated="1000"
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
        </div> */}
      </div>
    </div>
  );
};
export default UserDashBoard;
