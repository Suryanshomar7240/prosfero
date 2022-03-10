import React, { useEffect, useState } from "react";
import "./feedback.css";
import { AiFillStar } from "react-icons/ai";
import axios from "axios";

const Feedback = (prop) => {
  const [data, SetData] = useState({
    stars: 0,
    caption: "",
    userid: "",
  });
  
  const handleInputs = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    SetData({ ...data, [name]: value });
  };
  
  const handleSkip = () => {
    const name = "stars";
    const value = 0;
    SetData({ userid: "", stars: 0, caption: "" });
    
    const imgs = document.querySelectorAll(".staricon");
    for (let i = 0; i < data.stars; i++) {
      imgs[i].classList.remove("active");
    }
    prop.removefeedback();
  };
  
  const handleSend = () => {
    SetData({...data,userid:localStorage.getItem("token").toString()
     });
     const to_send={
       userid:localStorage.getItem("token"),
       stars:data.stars,
       caption:data.caption
     }
    if (localStorage.getItem("isAuthenticated")) {
      console.log(data);
      axios
        .post("http://localhost:5000/feedback/post", to_send)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    } else {
      window.alert("Please login to give your feedback");
    }

    handleSkip();
  };
  useEffect(() => {
    const imgs = document.querySelectorAll(".staricon");
    imgs.forEach((item, key) => {
      item.addEventListener("click", () => {
        const name = "stars";
        const value = `${key + 1}`;
        SetData({ ...data, [name]: value });
        if (data.stars !== 0) {
          for (let i = 0; i < data.stars; i++) {
            imgs[i].classList.remove("active");
          }
        }
        for (let i = 0; i <= key; i++) {
          imgs[i].classList.add("active");
        }
      });
    });
  }, [data, SetData]);

  const load=()=>{
  }

  return (
    <div className="content" onLoad={load}>
      <div className="container">
        <div className="head">
          <div className="heading">
            <h1>Share your experience</h1>
          </div>
          <div className="close" onClick={handleSkip}>
            <div className="s s1"></div>
            <div className="s s2"></div>
          </div>
        </div>
        <div className="mid">
          <div className="staricon" name="star" value="1">
            <AiFillStar />
          </div>
          <div className="staricon" name="star" value="2">
            <AiFillStar />
          </div>
          <div className="staricon" name="star" value="3">
            <AiFillStar />
          </div>
          <div className="staricon" name="star" value="4">
            <AiFillStar />
          </div>
          <div className="staricon" name="star" value="5">
            <AiFillStar />
          </div>
        </div>
        <div className="textarea">
          <p>Share your experience</p>
          <textarea
            name="caption"
            id="exp"
            placeholder="Let we know..."
            onChange={handleInputs}
          ></textarea>
        </div>
        <div className="end">
          <div className="btn_container">
            <button className="to_donate_page" onClick={handleSend}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
