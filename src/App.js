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
      title: "To kill a mockingbird",
      author: "Harper Lee",
      genres: ["Drama"],
      review: "Its a book",
      image: "https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg",
      stars: 3
  },
  {
      id: 3,
      title: "Metro 2033",
      author: "Dmitry Glukhovski",
      genres: ["Dystopian","Sci-fi"],
      review: "Its a book about metros",
      image: "https://m.media-amazon.com/images/I/41ZAxvFijWL._AC_SY1000_.jpg",
      stars: 5
    },
  {
      id: 4,
      title: "Metro 2034",
      author: "Dmitry Glukhovski",
      genres: ["Dystopian","Sci-fi"],
      review: "Sequel to metro 2033",
      image: "https://kbimages1-a.akamaihd.net/157c78fa-dc13-4786-99af-fcfc81125171/1200/1200/False/metro-2034-6.jpg",
      stars: 5
    },
  {
      id: 5,
      title: "Metro 2035",
      author: "Dmitry Glukhovski",
      genres: ["Dystopian","Sci-fi"],
      review: "Another book about metros",
      image: "https://m.media-amazon.com/images/I/51Y-B5KVppL.jpg",
      stars: 5
    },
  {
      id: 6,
      title: "Javascript for dummies",
      author: "JS Cript",
      genres: ["Horror"],
      review: "Help D:",
      image: "https://m.media-amazon.com/images/I/51IWL7y8ecL._AC_SY780_.jpg",
      stars: 5
    },
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
      title: "To kill a mockingbird",
      author: "Harper Lee",
      genres: ["Drama"],
      review: "Its a book",
      image: "https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg",
      stars: 3
  },
  {
      id: 3,
      title: "Metro 2033",
      author: "Dmitry Glukhovski",
      genres: ["Dystopian","Sci-fi"],
      review: "Its a book about metros",
      image: "https://m.media-amazon.com/images/I/41ZAxvFijWL._AC_SY1000_.jpg",
      stars: 5
    },
  {
      id: 4,
      title: "Metro 2034",
      author: "Dmitry Glukhovski",
      genres: ["Dystopian","Sci-fi"],
      review: "Sequel to metro 2033",
      image: "https://kbimages1-a.akamaihd.net/157c78fa-dc13-4786-99af-fcfc81125171/1200/1200/False/metro-2034-6.jpg",
      stars: 5
    },
  {
      id: 5,
      title: "Metro 2035",
      author: "Dmitry Glukhovski",
      genres: ["Dystopian","Sci-fi"],
      review: "Another book about metros",
      image: "https://m.media-amazon.com/images/I/51Y-B5KVppL.jpg",
      stars: 5
    },
  {
      id: 6,
      title: "Javascript for dummies",
      author: "JS Cript",
      genres: ["Horror"],
      review: "Help D:",
      image: "https://m.media-amazon.com/images/I/51IWL7y8ecL._AC_SY780_.jpg",
      stars: 5
    },
  ]);

  const [openBookPopup, setOpenBookPopup] = useState(false) 

  const [currentBook, setCurrentBook] = useState(null)
  
  const HandleSetCurrentBook = (id) => {
    const bookWithId = mediaItems.find(obj => obj.id === id)
    setCurrentBook(bookWithId ? [{ ...bookWithId }] : null)
  }

  const handleNewBookReview = (book) => {
    const newState = mediaItems.concat(book);
    setMediaItems(newState ? { ...newState } : null)
  }

  return (
    <body>
      <div className="App">
        {/*<button onClick={() => HandleSetCurrentBook(2)}>Open Review Popup</button>*/}
          <ReviewPopup triggerBook={currentBook} setTrigger={HandleSetCurrentBook}
           >
            <h3>Review Popup</h3>
          </ReviewPopup>
        <button onClick={() => setOpenBookPopup(true)}>Add a book</button>
        <AddBook open={openBookPopup} onClose={() => setOpenBookPopup(false)} mediaItems={mediaItems} setMediaItems={handleNewBookReview}/>
      </div>
      <div className="App">
        <Slider {...settings}>
        {books.map((item) =>(
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
