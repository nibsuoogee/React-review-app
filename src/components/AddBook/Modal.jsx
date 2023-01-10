import React from 'react'
import './Modal.css'

const Modal = ({open, onClose}) => {
    if (!open) return null;
  return (
    <div classname="addbookpopup">

    
        <form>
            <p onClick={onClose} className='closeBtn'>X</p>
            <label for="name">Name </label>
            <input type="text" id="name" name="firstname" placeholder="Name of the book"/>

            <label for="lname">Author </label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

            <label for="country">Country</label>
            <select id="country" name="country">
                <option value="scifi">Sci-fi</option>
                <option value="drama">Drama</option>
                <option value="science">Science</option>
            </select>

            <input type="submit" value="Submit"/>
        </form>
    </div>
  )
}

export default Modal