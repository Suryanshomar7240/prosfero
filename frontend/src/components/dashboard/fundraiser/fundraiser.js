import React, { useEffect, useState } from "react";
import Fundraiser from "./FundraiserCard";
import axios from "axios";
const Fundraisers = (prop) => {

  const [fundraisers, setFundraisers] = useState([]);

  const getDashboardData = (data) => {
    return Promise.all(
      data.map((fr) => {
        return fr;
      })
    );
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/fundraiser/${prop.userid}`)
      .then((active) => getDashboardData(active.data))
      .then((dash) => setFundraisers(dash));
  }, [prop]);

  return (
    <div className="fundraiser-grid Dashboard-content">
      {fundraisers.map((data, id) => {
        return (
          <Fundraiser
            imgLink={data.photoUrl}
            userImg={data.photoUrl}
            userName={data._id}
            orgName={data.orgName}
            progress={data.moneyCollected}
            required={data.targetMoney}
            FundName="For Medical Camp"
          />
        );
      })}
    </div>
  );
};

export default Fundraisers;
