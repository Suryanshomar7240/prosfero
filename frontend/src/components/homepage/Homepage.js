import React, { useState, useEffect } from "react";
import "./homepage.css";
import axios from "axios";
import donate_image from "../../assets/donate.png";
import DonationCard from "../donationCards/DonationCard";
import Options from "./options/Options";
import Carousel from "react-elastic-carousel";
import Review from "./reviews/Review";
// import Feedback from "../feedback/Feedback";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
];

const Homepage = () => {
  const [fundraisers, setFundraisers] = useState([]);
  const [userName, setUserName] = useState("");

  const getActiveFundraiser = () => {
    return axios.get("http://localhost:5000/fundraiser/active");
  };

  const getDashboardData = (data) => {
    return Promise.all(
      data.map((fr) => {
        return fr;
      })
    );
  };

  useEffect(() => {
    getActiveFundraiser()
      .then((active) => getDashboardData(active.data))
      .then((dash) => setFundraisers(dash));
  }, []);

  const getUserData = (id) => {
    return axios.get(`http://localhost:5000/user/dashboard/${id}`);
  };

  const feedbackButton = (e) => {
    const homepage = document.querySelector("#home");
    homepage.classList.add("blury");
    homepage.children[0].classList.add('display_none');
  };
  return (
    <div id="home">
      {/* <Feedback className='display_none'/> */}
      <div className="Homepage">
        <section className="intro">
          <div className="intro_left">
            <img src={donate_image} alt="Donate" />
          </div>
          <div className="intro_right">
            <h1 className="home_head">
              Play your role in a constructive cause.
            </h1>
            <h2 className="home_subhead">
              Donate to or start a fundraiser today.
            </h2>
            <div className="button_wrapper">
              <button
                className="to_donate_page"
                onClick={() => {
                  window.location = "/explore";
                }}
              >
                Contribute Today
              </button>
            </div>

            <h2 className="home_subhead_sm">
              We believe in complete transparency. Get a tab of every
              transaction made with your money.
            </h2>
          </div>
        </section>

        <section id="homepageDonationCards">
          <div className="options_heading">
            <h2 className="head_one">Most Active Fundraisers</h2>
          </div>
          <h4 className="sub_head_one">
            Contribute today to someone who is in a dire need of your help
          </h4>
          {/* <div className='trendingDonationContainer'> */}
          <Carousel breakPoints={breakPoints}>
            {fundraisers.map((data, value) => {
              getUserData(data.createdby).then((res) => {
                setUserName(res.data.firstname);
              });
              return (
                <DonationCard
                  key={value}
                  orgName={data.orgName}
                  imgLink={data.photoUrl}
                  userImg={data.photoUrl}
                  userName={userName}
                  progress={data.moneyCollected}
                  required={data.targetMoney}
                />
              );
            })}
          </Carousel>
          <div className="btn_container">
            <button
              className="to_donate_page"
              onClick={() => {
                window.location = "/explore";
              }}
            >
              {" "}
              &nbsp; Explore More &nbsp;
            </button>
          </div>
        </section>

        <section id="funding_options_container">
          <div className="options_heading">
            <h2 className="head_one">Raise funds for any of these causes</h2>
            <div>
              <h4 className="sub_head_one">
                We help you for your personal needs, enable you to work for a
                social cause. You can rely on us for your fundraisers
              </h4>
            </div>
            <Options />
          </div>
        </section>

        <section id="reviewsContainer">
          <div className="options_heading">
            <h2 className="head_one">What people who used our platform say</h2>
            <div>
              <h4 className="sub_head_one">
                We value your reviews a lot. They help us improve our
                shortcomings so that we can make the application better for you
              </h4>
              <br />
              <br />
            </div>
          </div>
          <Carousel breakPoints={breakPoints}>
            <Review
              pfpLink="https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
              username="Yash"
              reviewHead="Top 10 qoutes by Yash"
              reviewText="If you cant come in her come on her"
            />
            <Review
              pfpLink="https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
              username="Yash"
              reviewHead="Top 10 qoutes by Yash"
              reviewText="If you cant come in her come on her"
            />
            <Review
              pfpLink="https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
              username="Yash"
              reviewHead="Top 10 qoutes by Yash"
              reviewText="If you cant come in her come on her"
            />
            <Review
              pfpLink="https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
              username="Yash"
              reviewHead="Top 10 qoutes by Yash"
              reviewText="If you cant come in her come on her"
            />
          </Carousel>
          <div className="btn_container">
            <button
              className="to_donate_page"
              onClick={() => {
                feedbackButton();
              }}
            >
              {" "}
              &nbsp; Your opinion ? &nbsp;
            </button>
          </div>
        </section>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Homepage;
