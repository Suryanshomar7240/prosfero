import React from "react";
import "./fundraiser.css";

const Fundraiser = (props) => {
  return (
    <div className="User_recent_fund_card">
      <div className="Card_left">
        <img src={props.imgLink} alt="donation" />
      </div>
      <div className="Card_right">
        <div className="Fund_name">{props.FundName}</div>
        <div className="fund_Target">
          Target : <span className="money">{props.required}</span>
        </div>
        <div className="fund_amount">
          Target acheived : <span className="money">{props.progress}</span>
        </div>
        <div className="fund_progress">Percentage Progress: {parseInt((props.progress / props.required) * 100)}%</div>
        <div className="progress">
          <div
            className="progress-bar bg-primary"
            role="progressbar"
            style={{
              width: (props.progress / props.required) * 100 + "%",
            }}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <span></span>
          </div>
        </div>
        <button className="donate_button" onClick={()=>{
          window.location=('/update/'+ props.FundId);
        }}>Update Details</button>
      </div>
    </div>
  );
};
export default Fundraiser;
