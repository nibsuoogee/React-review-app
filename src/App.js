import './App.css';
import ReviewPopup from './components/ReviewPopup/ReviewPopup';
import { useState } from 'react';
import AddBook from './components/AddBook/BookPopUp';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { books } from "./Data.js"
import { settings } from "./Settings.jsx"


function App() {
  
  const [mediaItems, setMediaItems] = useState(books);

  const [openBookPopup, setOpenBookPopup] = useState(false) 

  const [currentBook, setCurrentBook] = useState(null)
  const HandleSetCurrentBook = (id) => {
    const bookWithId = mediaItems.find(obj => obj.id === id)
    setCurrentBook(bookWithId ? [{ ...bookWithId }] : null)
  }

  const handleNewBookReview = (book) => {
    console.log(mediaItems)
    const newState = mediaItems.concat(book);
    console.log(newState)
    setMediaItems(newState ? { ...newState } : null)
  }

  return (
    <body>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div className='buttonbar'>
        <div id="addbtndiv">
          <button id="addbtn" onClick={() => setOpenBookPopup(true)}><i class="fa fa-plus fa-2x"></i></button>
        </div>
        <div id="searchbtndiv">
          <button id="searchbtn"><i class="fa fa-search fa-2x"></i></button>
        </div>
      </div>

      <div className="App">
        <Slider {...settings} mediaItems={mediaItems}>
          {mediaItems.map((item) => (
          <div className="card">
            <img src={item.image} alt={item.title} onClick={() => HandleSetCurrentBook(item.id)}/>
          </div>
          ))}
        </Slider>
      </div>
      <div className='popups'>
        <AddBook open={openBookPopup} onClose={() => setOpenBookPopup(false)} mediaItems={mediaItems} setMediaItems={handleNewBookReview}/>
        <ReviewPopup triggerBook={currentBook} setTrigger={HandleSetCurrentBook}>
            <h3>Review Popup</h3>
            </ReviewPopup>
      </div>
    
    </body>
  );
}

export default App;
