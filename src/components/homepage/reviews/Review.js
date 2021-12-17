import React from 'react'
import "./review.css"
import {AiFillStar} from 'react-icons/ai'
import {MdVerified} from 'react-icons/md'

const Review = (props) => {
    return (
        <div className='reviewWrapper'>
            <div className="reviewerDetailContainer">
                <div className="pfpContainer">
                    <img src={props.pfpLink} alt={props.username} />
                </div>
                <div className="usernameWrapper">
                    <div className="username-1">{props.username} <MdVerified className = "verified"/> </div>
                </div>
            </div>
            <div className="stars">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            </div>

            <div className="reviewHead">
                {props.reviewHead}
            </div>
            
            <div className="reviewText">
                {props.reviewText}
            </div>

        </div>
    )
}

export default Review
