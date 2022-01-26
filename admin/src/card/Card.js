import axios from "axios";
// import React from "react";
import Cookies from "js-cookie";
import { send} from "emailjs-com";
import React,{useState,useEffect} from 'react';
import "./card.css";

const Card = (props) => {
  
  const [userdata, setUserData] = useState({
    name: "",
    email: "",
  });
  
  useEffect(() => {
    axios.get(`http://localhost:5000/user/dashboard/${props.userid}`)
      .then((res)=>{
          setUserData({
            name:res.data.firstname+' '+res.data.lastname,
            email:res.data.email
          })
      })
      .catch((err)=>{
        console.log("Error in loading fundraiser data of"+props.userid+" : "+err)
      })
  }, [props]);
  
  const handleDelete = () => {
    const jwttoken = Cookies.get("jwt") || "invalid";

    const url = "http://localhost:5000/admin/delete/" + props.userid;
    axios
      .delete(url, {
        data: {
          jwttoken: jwttoken,
        },
      })
      .then(() => {
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  const handleReport = () => {
    const data =
      "Your Fundraiser was deleted as it was reported as not appropriate by the Prosfero Team.";
    console.log("click ");
    send(
      "service_4nhy15e",
      "template_dnrtv93",
      data,
      "user_36SNYbq8KaIwjEzuiv63F"
    )
      .then(() => {
        // window.alert('Message sent successfully to Prosfero Team');
        console.log("User reported successfully");
      })
      .catch((err) => {
        console.log("Error Occured: ", err);
      });
  };

  return (
    <div>
      <React.Fragment>
        <div className={"card_wrapper " + props.width}>
          <div className="img_container">
            <img src={props.imgLink} alt="donation" />{" "}
          </div>
          <div className="card_title">{props.orgName}</div>
          <div className="userDetail">
            <img src={props.userImg} alt={userdata.name} />
            <span className="userName">By {userdata.name}</span>
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
          <button className="donate_button red" onClick={handleReport}>
            Report User
          </button>
          <button className="donate_button red" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </React.Fragment>
    </div>
  );
};

export default Card;
