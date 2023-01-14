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
        <div className="reviewpopup">
            <div className="reviewpopup-inner">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <button className="close-btn" onClick={() => props.setTrigger(null)}><i class="fa fa-close"></i></button>
                {props.triggerBook.map((media) => (
                    <div className="review-box" key={media.id}>
                        <table>
                            <tr>
                                <td class="image_and_stars">
                                    <img src={media.image} alt="Media cover image"/>
                                    <div className="star-rating">
                                        <Rate rating={media.stars} />
                                    </div>
                                    <div>
                                        {displayDate(media.time)}
                                    </div>
                                    <div>
                                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                                        <button className="close-btn" id="trash-btn" onClick={() => handleConfirmState(true)}><i class="fa fa-trash"></i></button>
                                    </div>
                                </td>
                                <td>
                                    <table class="review_table">
                                        <tr>
                                            <td class="data_type_text">Title</td>
                                            <div class="data_box">
                                                <h3 class="review_data">{ media.title }</h3>
                                            </div>
                                        </tr>
                                        <tr>
                                            <td class="data_type_text">Author</td>
                                            <div class="data_box">
                                                <h3 class="review_data">{ media.author }</h3>
                                            </div>
                                        </tr>
                                        <tr>
                                            <td class="data_type_text">Genres</td>
                                            <div class="data_box">
                                                <h3 class="review_data">{ media.genres }</h3>
                                            </div>
                                        </tr>
                                        <tr>
                                            <td class="data_type_text">Review</td>
                                        </tr>
                                        <tr>
                                            <td colspan="2">
                                                <div class="review_box">
                                                    <p>{ media.review }</p>
                                                </div>    
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </div>
                ))}
            </div>  
            
            <div className='popups'>
                <Confirmation open={confirmState} onClose={() => handleConfirmState(false)} onConfirm={() => handleRemove()}/>
            </div>
            
        </div>
        
    ) : "";
}

export default ReviewPopup 