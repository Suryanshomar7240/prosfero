import React from 'react';
import './feedback.css';
const Feedback = () => {
    return ( 
        <div className="content">
        <div className="container">
            <div className="head">
                <div className="heading"><h1>Share your experience</h1></div>
                <div className="close">
                    <div className="s s1"></div>
                    <div className="s s2"></div>
                </div>
            </div>
            <div className="mid">
                <div className="media"><img src="https://cdn-icons-png.flaticon.com/128/3260/3260838.png" alt="angry" /></div>
                <div className="media"><img src="https://cdn-icons-png.flaticon.com/128/42/42901.png" alt="moderate" /></div>
                <div className="media"><img src="https://cdn-icons-png.flaticon.com/128/3260/3260877.png" alt="neutral" /></div>
                <div className="media"><img src="https://cdn-icons-png.flaticon.com/128/569/569501.png" alt="smile" className="active" /></div>
                <div className="media"><img src="https://cdn-icons-png.flaticon.com/128/1356/1356639.png" alt="happy" /></div> 
            </div>
            <div className="textarea">
                <p>Share your experience</p>
                <textarea name="exp" id="exp" placeholder="Let we know..."></textarea>
            </div>
            <div className="end">
                <div className="submission">
                    <button className="sub btn">Send</button>
                </div>
                <div className="skip">
                    <button className="skp btn">Skip</button>
                </div>
            </div>
        </div>
    </div>
     );
}
 
export default Feedback;