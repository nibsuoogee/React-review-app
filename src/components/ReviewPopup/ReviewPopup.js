import React from 'react'
import { useState } from 'react';
import './ReviewPopup.css'
import Rate from '../StarRating/StarRating'
import Confirmation from '../Confirmation/Confirmation.js'

function ReviewPopup(props) {
    const [confirmState, setConfirmState] = useState(false);

    const handleConfirmState = (value) => {
        setConfirmState(value)
    }

    const handleRemove = () => {
        handleConfirmState(false);
        props.setTrigger(null);
        props.handleRemoveReview(props.triggerBook);   
    }

    const displayDate = (time) => {
        return (time) ? (
            <div>
                <h4 className="post-date-text">Posted:</h4>
                <h4 className="post-date-text">{time.toLocaleDateString() } { time.toLocaleTimeString() }</h4>
            </div>
        ) : 
        <div>
            <h4 className="post-date-text">No post date</h4>;
        </div>
    }

    return (props.triggerBook) ? (
        <div className="pop-up-outer">
            <div className='pop-up-inner'>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <button className="close-btn" onClick={() => props.setTrigger(null)}><i class="fa fa-close"></i></button>
                {props.triggerBook.map((media) => (
                <div className='content'>
                    <div class="image_and_stars">
                        <img src={media.image} alt="Media cover image"/>
                        <div className="star-rating">
                            <Rate rating={media.stars} />
                        </div>
                        <div>
                            {displayDate(media.time)}
                        </div>
                        
                    </div>
                    <div className='data'>
                        <div id="titledata" class="datadiv">
                            <h3>Title</h3>
                            <h2 className='titletext'>{media.title}</h2>
                        </div>
                        <div id="authordata" class="datadiv">
                            <h3>Author</h3>
                            <h2 className='titletext'>{media.author}</h2>
                        </div>
                        <div id="genredata" class="datadiv">
                            <h3>Genres</h3>
                            <h2 className='titletext'>{media.genres}</h2>
                        </div>
                        <div id="reviewdata" class="datadiv">
                            <h3>Review</h3>
                            <p className='titletext' id="reviewtext">{media.review}</p>
                        </div>
                    </div>
                </div>
                ))}
                <div>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                    <button className="close-btn" id="trash-btn" onClick={() => handleConfirmState(true)}><i class="fa fa-trash"></i></button>
                </div>
            </div>
            <div className='popups'>
                <Confirmation open={confirmState} onClose={() => handleConfirmState(false)} onConfirm={() => handleRemove()}/>
            </div>
        </div>
    ) : null;
}

export default ReviewPopup;
