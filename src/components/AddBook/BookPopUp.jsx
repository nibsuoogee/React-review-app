import React from 'react'
import './BookPopUp.css'
import {useState} from "react"
import Rate from '../StarRating/StarRating'

const AddBook = ({open, onClose, mediaItems, setMediaItems}) => {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [genre, setGenre] = useState("")
    const [review, setReview] = useState("")
    const [image, setImage] = useState("https://mobimg.b-cdn.net/v3/fetch/8b/8b0e79c4c83b8b6f57d5007b8e54181c.jpeg")
    const [stars, setStars] = useState(0)

    const [imageValid, setImageValid] = useState(true);

    const handleTitleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleAuthorChange = (event) => {
        setAuthor(event.target.value)
    }

    const handleGenreChange = (event) => {
        setGenre(event.target.value)
    }

    const handleReviewChange = (event) => {
        setReview(event.target.value)
    }

    const handleImageChange = (event) => {
        setImage(event.target.value)
        setImageValid(true)
    }

    const handleImageError = (event) => {
        setImageValid(false);
    }

    const handleStarsChange = (event) => {
        setStars(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!imageValid) {
            alert("Image source is invalid, please provide a valid image source.");
            return;
        }
        const currentDateTime = new Date();
        console.log(currentDateTime);
        const newReviewID = mediaItems.length === 0 ? 1 : mediaItems.reduce((prev, current) => (prev.id > current.id) ? prev.id : current.id) + 1;
        const newReview = [{
            id: newReviewID,
            title: title,
            author: author,
            genres: [genre],
            review: review,
            image: image,
            stars: stars,
            time: currentDateTime
        }]
        setMediaItems(newReview)
        console.log(mediaItems)
        onClose()
       
    }

    return(open) ? (
        <div className='addbookpopup'>
            <div className='reviewpopup-inner'>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <button className="close-btn" onClick={onClose}><i class="fa fa-close"></i></button>
                <div className='review-box'>
                    <form onSubmit={handleSubmit}>
                        <label for="title">TITLE </label>
                        <input type="text" id="name" name="title" placeholder="Name of the book" value={title} onChange={handleTitleChange}/>

                        <label for="author">AUTHOR </label>
                        <input type="text" id="author" name="author" placeholder="Author" value={author} onChange={handleAuthorChange}/>

                        <label for="genre">GENRE</label>
                        <select id="genre" name="genre" value={genre} onChange={handleGenreChange}>
                            <option value="scifi">Sci-fi</option>
                            <option value="drama">Drama</option>
                            <option value="fantasy">Fantasy</option>
                            <option value="dystopian">Dystopian</option>
                            <option value="horror">Horror</option>
                            <option value="romance">Romance</option>
                            <option value="thriller">Thriller</option>
                            <option value="history">History</option>
                            <option value="biography">Biography</option>
                            <option value="cooking">Cooking</option>
                            <option value="self-help">Self-help</option>
                            <option value="finance">Finance</option>
                        </select>
                        <label>REVIEW</label>
                        <div id="reviewtext-div">
                            <div id="reviewtext-holder">
                                <textarea rows="10" cols="45" placeholder='Type a short review for the book' value={review} onChange={handleReviewChange}/>
                            </div>
                        </div>
                        <label>COVER</label>
                        <input type="text" id="image" name="author" placeholder="link to image" value={image} onChange={handleImageChange}/>
                        <img src={image} alt=" Media cover image" onError={handleImageError}/>
                        <br></br>
                        <label>STARS</label>
                        <Rate rating={stars} onRating={(rate) => setStars(rate)}/>
                        <div className='container'>
                            <div class="btn-holder">
                                <input type="submit" value="Save" id="save-btn"/>
                            </div>
                        </div>            
                    </form>
                </div>
            </div>
        </div>
    ) : null;
}

export default AddBook