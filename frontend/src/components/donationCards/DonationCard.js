import React from "react";
import "./donationCard.css";
import axios from "axios";
const DonationCard = (props) => {
  // const [verifed, setverify] = useState(false);
  const donate = () => {
    const id_token = localStorage.getItem("id_token");
    const userid = localStorage.getItem("userId");
    console.log(userid);
    
    if (id_token == null || userid == null) {
      alert("You have to login first to create fundraisers");
    } else {
      const donate_data = {
        userId: userid,
        fundId: props.fundId,
        money: 10,
      };
      axios
        .post("http://localhost:5000/donation/", donate_data)
        .then((res) => window.alert(res.data.message))
        .catch((err) => console.log(err));
    }
  };

  return (
    <React.Fragment>
      <div className={"card_wrapper " + props.width}>
        <div className="img_container">
          <img src={props.imgLink} alt="donation" />{" "}
        </div>
        <div className="card_title">{props.orgName}</div>
        <div className="userDetail">
          <img src={props.userImg} alt={props.userName} />
          <span className="userName">By {props.userName}</span>
        </div>
        <span className="collection">
          <span className="blue">₹{props.progress}</span> raised out of{" "}
          <span className="blue">₹{props.required}</span>
        </span>
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{
              width: (props.progress / props.required) * 100 + "%",
              backgroundColor: "#318CE7",
            }}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <button className="donate_button" onClick={donate}>
          Donate
        </button>
      </div>
    </React.Fragment>
  );
};

export default DonationCard;
