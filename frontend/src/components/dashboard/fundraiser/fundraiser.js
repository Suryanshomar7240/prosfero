import React,{useEffect, useState} from "react";
import Fundraiser from "./FundraiserCard";

const Fundraisers = (prop) => {
  const fundraisers = prop.fundraiser;

  const [nofund, setnoFund] = useState(true);
    useEffect(() => {
      
    if (fundraisers.length > 0) setnoFund(false);
    }, [fundraisers])
  return (
    <div className="fundraiser-grid Dashboard-content" >
      {!nofund ? (
        fundraisers.map((fund, value) => {
          return (
            <Fundraiser
            key={value}
              imgLink={fund.photoUrl}
              userName={prop.userid}
              orgName={fund.orgName}
              progress={fund.moneyCollected}
              required={fund.targetMoney}
              FundName={fund.orgName}
            />
          );
        })
      ) : (
        <>
          <h1 className="Nofund">You didn't raise any fundraiser :(</h1>
        </>
      )}
    </div>
  );
};

export default Fundraisers;
