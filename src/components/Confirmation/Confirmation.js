import React from 'react'
import './Confirmation.css'
import {useState} from "react"

const Confirmation = ({open, onClose, onConfirm}) => {

    return (open) ? (
        <div className="confirmpopup">
            <div className="confirmpopup-inner">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <button className="confirm-btn" onClick={() => onConfirm()}><i class="fa fa-trash"></i></button>
                
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <button className="close-btn" onClick={() => onClose()}><i class="fa fa-close"></i></button>

                <h1>Are you sure you want to delete this entry?</h1>
                
                
            </div>
        </div>
    ) : "";

}

export default Confirmation