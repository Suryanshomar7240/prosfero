import React from 'react';
import Card from '../card/Card';
import "./home.css"

const Home = () => {
  return (<div>
      <div className="card_container">
          <Card key={1}
            orgName = {"gareeb foundation"}
            imgLink = {"https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"}
            userImg = {"https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"} 
            userName = {"Yashraj"}
            progress = {5000}
            required = {7000}/>
      </div>
  </div>);
};

export default Home;
