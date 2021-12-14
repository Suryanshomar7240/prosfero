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
            <div className="imageContainer"><img src={medical} alt="medical" /><br />Medical</div>
            <div className="imageContainer"><img src={education} alt="education" /><br />Education</div>
            <div className="imageContainer"><img src={naturalDisaster} alt="naturalDisaster" /><br />Natural Disaster</div>
            <div className="imageContainer"><img src={animals} alt="animals" /><br />Animals</div>
            <div className="imageContainer"><img src={donateHand} alt="donateHand" /><br />Other</div>
          </div>
        </div>
    )
}

export default Options
