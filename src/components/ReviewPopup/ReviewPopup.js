import React from 'react'
import './ReviewPopup.css'

function ReviewPopup(props) {
    return (props.trigger) ? (
        <div className="reviewpopup">
            <div className="reviewpopup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}>x</button>
                { props.children }
                {props.mediaItems.map((media) => (
                    <img src={media.image} alt="Media cover image"/>
                ))}
            </div>    
        </div>
    ) : "";
}

export default ReviewPopup 