import React from 'react'
import './Modal.css'

const Modal = ({open, onClose}) => {
    if (!open) return null;
  return (
    <div classname="addbookpopup">
        <div className='addbookpopup-inner'>
            <form>
                <p onClick={onClose} className='closeBtn'>X</p>
                <label for="name">Name </label>
                <input type="text" id="name" name="name" placeholder="Name of the book"/>

                <label for="author">Author </label>
                <input type="text" id="author" name="author" placeholder="Author..."/>

                <label for="genre">Genre</label>
                <select id="genre" name="genre">
                    <option value="scifi">Sci-fi</option>
                    <option value="drama">Drama</option>
                    <option value="science">Science</option>
                </select>
                <input type="submit" value="Save"/>
            </form>
        </div>
    </div>
  )
}

export default Modal