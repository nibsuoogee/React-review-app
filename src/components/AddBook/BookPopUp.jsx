import React from 'react'
import './BookPopUp.css'
import {useState} from "react"
import Rate from '../StarRating/StarRating'

const AddBook = ({open, onClose, mediaItems, setMediaItems}) => {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [genre, setGenre] = useState("")
    const [review, setReview] = useState("")
    const [image, setImage] = useState("")
    const [stars, setStars] = useState(0)

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
    }

    const handleStarsChange = (event) => {
        setStars(event.target.value)
    }

    const handleSubmit = (event) => {
        const newReviewID = mediaItems.reduce((prev,current) => (prev.id > current.id) ? prev.id + 1 : current.id + 1);
        const newReview = [{
            id: newReviewID,
            title: title,
            author: author,
            genres: [genre],
            review: review,
            image: image,
            stars: stars
        }]
        setMediaItems(newReview)
        event.preventDefault()
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
                            <option value="self-help">Cooking</option>
                            <option value="finance">Cooking</option>
                        </select>
                        <label>REVIEW</label>
                        <div id="reviewtext-div">
                            <div id="reviewtext-holder">
                                <textarea rows="10" cols="45" placeholder='Type a short review for the book' value={review} onChange={handleReviewChange}/>
                            </div>
                        </div>
                        <label>COVER</label>
                        <input type="text" id="image" name="author" placeholder="link to image" value={image} onChange={handleImageChange}/>
                        <img src={image} alt="Media cover image"/>
                        <br></br>
                        <label>STARS</label>
                        <Rate rating={stars} onRating={(rate) => setStars(rate)}/>
                        <input type="submit" value="Save" id="save-btn"/>
                    </form>
                </div>
            </div>
        </div>
    ) : null;
}

export default AddBook