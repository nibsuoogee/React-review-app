import React from 'react'
import './BookPopUp.css'
import {useState} from "react"

const AddBook = ({open, onClose}) => {
    const [name, setName] = useState("")
    const [author, setAuthor] = useState("")
    if(!open) return null;

    return(
        <div className='reviewpopup'>
            <div className='reviewpopup-inner'>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <button className="close-btn" onClick={onClose}><i class="fa fa-close"></i></button>
                <div className='review-box'>
                    <form>
                        <label for="name">NAME </label>
                        <input type="text" id="name" name="name" placeholder="Name of the book" value={name} onChange={(e) => setName(e.target.value)}/>

                        <label for="author">AUTHOR </label>
                        <input type="text" id="author" name="author" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)}/>

                        <label for="genre">GENRE</label>
                        <select id="genre" name="genre">
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
                        </select>
                        <label>REVIEW</label>
                        <div id="reviewtext-div">
                            <textarea rows="10" cols="45" placeholder='Type a short review for the book'/>
                        </div>
                        <input type="submit" value="Save"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddBook