import './App.css';
import ReviewPopup from './components/ReviewPopup/ReviewPopup';
import { useState } from 'react';
import AddBook from './components/AddBook/BookPopUp';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { books } from "./Data.js"

function App() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
    ]
  };
  
  // Mediakappaleiden tila säilötään vaikka tässä globaalilla tasolla mediaItemsiin
  // tämä tila syötetään alas esim karuselliin sekä popupiin
  const [mediaItems, setMediaItems] = useState([
    {
      id: 1,
      title: "1984",
      author: "George Orwell",
      genres: ["Dystopian","Sci-fi"],
      review: "One of the books of all time, highly recommend to anyone interested in society and surveillance.",
      image: "https://kbimages1-a.akamaihd.net/a5312ed2-bc80-4f4c-972b-c24dc5990bd5/166/300/False/george-orwell-1984-4.jpg",
      stars: 4
    },
    {
      id: 2,
      title: "Metro 2033",
      author: "	Dmitri Gluhovski",
      genres: ["Dystopian","Sci-fi"],
      review: "If you like the games, you will love the books",
      image: "https://upload.wikimedia.org/wikipedia/fi/thumb/8/8b/Metro_2033.jpg/200px-Metro_2033.jpg",
      stars: 5
    }
  ]);

  const [openBookPopup, setOpenBookPopup] = useState(false) 
  /* have one state for current book and popup open */
  /* array map mdn to clone state */
  const [currentBook, setCurrentBook] = useState(null)
  
  const HandleSetCurrentBook = (id) => {
    const bookWithId = mediaItems.find(obj => obj.id === id)
    setCurrentBook(bookWithId ? [{ ...bookWithId }] : null)
  }

  const handleNewBookReview = (book) => {
    const newState = mediaItems.map((mediaBook) => 
      mediaBook.id === book.id ? book : mediaBook
    )
    setMediaItems(newState ? { ...newState } : null)
  }

  return (
    <body>
      <div className="App">
        <button onClick={() => HandleSetCurrentBook(2)}>Open Review Popup</button>
          <ReviewPopup triggerBook={currentBook} setTrigger={HandleSetCurrentBook}
           setBookReview={handleNewBookReview} mediaItems={mediaItems}>
          </ReviewPopup>
        <button onClick={() => setOpenBookPopup(true)}>Add a book</button>
          <AddBook open={openBookPopup} onClose={() => setOpenBookPopup(false)} />
        <Slider {...settings}>
        {books.map((item) =>(
          <div className="card">
            <img src={item.image} alt={item.title}/>
        </div>
        ))}
        </Slider>
      </div>
    </body>
  );
}

export default App;
