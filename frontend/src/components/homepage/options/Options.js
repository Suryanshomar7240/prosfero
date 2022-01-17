import React from 'react'
import medical from "../../../assets/medical.png"
import education from "../../../assets/education.png"
import naturalDisaster from "../../../assets/naturalDisaster.png"
import donateHand from "../../../assets/donateHand.png"
import animals from "../../../assets/animals.png"
import "./options.css"

const Options = () => {
    return (
        <div>
            <div className="optionsContainer">
            <div className="imageContainer"><img src={medical} alt="medical" onClick={()=>{window.location='/explore/medical'}}/><br />Medical</div>
            <div className="imageContainer"><img src={education} alt="education" id='iw' onClick={()=>{window.location='/explore/education'}}/><br />Education</div>
            <div className="imageContainer"><img src={naturalDisaster} alt="naturalDisaster" onClick={()=>{window.location='/explore/disaster'}}/><br />Natural Disaster</div>
            <div className="imageContainer"><img src={animals} alt="animals" onClick={()=>{window.location='/explore/animal'}}/><br />Animals</div>
            <div className="imageContainer"><img src={donateHand} alt="donateHand" onClick={()=>{window.location='/explore/other'}}/><br />Other Causes</div>
          </div>
        </div>
    )
}

export default Options
