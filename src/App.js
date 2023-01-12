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
      <header className='buttonbar'>
      <ReviewPopup triggerBook={currentBook} setTrigger={HandleSetCurrentBook}
           >
            <h3>Review Popup</h3>
          </ReviewPopup>
        <button onClick={() => setOpenBookPopup(true)}>Add a book</button>
      </header>
      <div className="App">
        {/*<button onClick={() => HandleSetCurrentBook(2)}>Open Review Popup</button>*/}
        <AddBook open={openBookPopup} onClose={() => setOpenBookPopup(false)} mediaItems={mediaItems} setMediaItems={handleNewBookReview}/>
        <Slider {...settings} mediaItems={mediaItems}>
          {mediaItems.map((item) => (
          <div className="card">
            <img src={item.image} alt={item.title} onClick={() => HandleSetCurrentBook(item.id)}/>
          </div>
          ))}
        </Slider>
      </div>
    
    </body>
  );
}

export default App;
