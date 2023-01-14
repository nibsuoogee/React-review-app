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

  const [hasDragged, setHasDragged] = useState(false);

  const handleMouseDown = () => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = () => {
    setHasDragged(true);
  };

  const handleMouseUp = () => {
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
  };

  const HandleSetCurrentBook = (id) => {
    if (!hasDragged) {
      const bookWithId = mediaItems.find(obj => obj.id === id)
      setCurrentBook(bookWithId ? [{ ...bookWithId }] : null)
    }
    setHasDragged(false);
  }

  const handleNewBookReview = (book) => {
    const newState = mediaItems.concat(book);
    setMediaItems(newState ? [ ...newState ] : null)
  }

  const handleRemoveReview = (book) => {
    const [extractedBook] = book;
    const newState = mediaItems.filter(obj => obj.id !== extractedBook.id);
    console.log(newState)
    setMediaItems(newState ? [ ...newState ] : null)
  }

  const [searchTerm, setSearchTerm] = useState("")
  
  return (
    <body>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div className='buttonbar'>
        <div id="addbtndiv">
          <button id="addbtn" onClick={() => setOpenBookPopup(true)}><i class="fa fa-plus fa-2x"></i></button>
        </div>
        <div id="searchbardiv">
          <input id="searchbar" type="text" placeholder='Search' onChange={(e) => {setSearchTerm(e.target.value)}} />
        </div>
      </div>

      <div className="App">
        <Slider {...settings} mediaItems={mediaItems}>
          {mediaItems.filter((val) => {
            if (searchTerm == ""){
              return val
            } else if ((val.author.toLowerCase().includes(searchTerm.toLowerCase())) || (val.title.toLowerCase().includes(searchTerm.toLowerCase()))){
              return val
            }
            
          }).map((item) => (
          <div className="card">
            <img src={item.image} alt={item.title} onClick={() => HandleSetCurrentBook(item.id)} onMouseDown={handleMouseDown}/>
          </div>
          ))}
        </Slider>
      </div>
      <div className='popups'>
        <AddBook open={openBookPopup} onClose={() => setOpenBookPopup(false)} mediaItems={mediaItems} setMediaItems={handleNewBookReview}/>
        <ReviewPopup triggerBook={currentBook} setTrigger={HandleSetCurrentBook} handleRemoveReview={handleRemoveReview}>
            <h3>Review Popup</h3>
            </ReviewPopup>
      </div>
    
    </body>
  );
}

export default App;