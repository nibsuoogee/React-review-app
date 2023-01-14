import './App.css';
import ReviewPopup from './components/ReviewPopup/ReviewPopup';
import { useState, useEffect } from 'react';
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

  const [showInfo, setShowInfo] = useState(false);

  const [infoMessage, setInfoMessage] = useState("");

  const [activeIndex, setActiveIndex] = useState(null);

  const [time, setTime] = useState(0);

  useEffect(() => {
    let intervalId = null;
    if (activeIndex) {
      intervalId = setInterval(() => {
        setTime(time => time + 1);
      }, 10);
    } else if (!activeIndex && time !== 0) {
      clearInterval(intervalId);
      setTime(0);
    }
    return () => clearInterval(intervalId);
  }, [activeIndex, time]);

  const handleInfoMessage = (message) => {
    setInfoMessage(message);
    setShowInfo(true);
    setTimeout(() => setShowInfo(false), 5000);
  }

  const handleMouseDown = (index) => {
    setActiveIndex(index);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = () => {
    setHasDragged(true);
  };

  const handleMouseUp = () => {
    setActiveIndex(null);
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
    setMediaItems(newState ? [ ...newState ] : null);
    handleInfoMessage("Entry added");
  }

  const handleRemoveReview = (book) => {
    const [extractedBook] = book;
    const newState = mediaItems.filter(obj => obj.id !== extractedBook.id);
    console.log(newState)
    setMediaItems(newState ? [ ...newState ] : null)
    handleInfoMessage("Entry removed");
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
            <img src={item.image} alt={item.title} className={`slider-item ${activeIndex === item.id ? 'active' : ''}`} 
            style={{transform: `scale(${item.id === activeIndex ?  0.8 + (-Math.sin(time / 20) * 0.02) : 1})`}}
            onClick={() => HandleSetCurrentBook(item.id)} onMouseDown={() => handleMouseDown(item.id)}/>
          </div>
          ))}
        </Slider>
      </div>
      <div className='popups'>
        <AddBook open={openBookPopup} onClose={() => setOpenBookPopup(false)} mediaItems={mediaItems} setMediaItems={handleNewBookReview}/>
        <ReviewPopup triggerBook={currentBook} setTrigger={HandleSetCurrentBook} handleRemoveReview={handleRemoveReview}>
            <h3>Review Popup</h3>
            </ReviewPopup>
          {showInfo && (
            <div className="animated-info">
              <div class="data_type_text">{ infoMessage }</div>
            </div>
          )}
      </div>
    
    </body>
  );
}

export default App;