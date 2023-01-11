import './App.css';
import ReviewPopup from './components/ReviewPopup/ReviewPopup';
import Menu from './components/Menu/menu.js';
import { useState } from 'react';
import AddBook from './components/AddBook/BookPopUp';

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  
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


  return (
    <body>
    <div className="App">
      <header className="App-header">
        {/*<Menu mediaItems={mediaItems}/>*/}
        {/*Button to open the review popup*/}
        <button onClick={() => setButtonPopup(true)}>Open Review Popup</button>
          <ReviewPopup trigger={buttonPopup} setTrigger={setButtonPopup} mediaItems={mediaItems} setMedia={setMediaItems}>
            <h3>Review Popup</h3>
          </ReviewPopup>
          
        <button onClick={() => setOpenBookPopup(true)}>Add a book</button>
        <AddBook open={openBookPopup} onClose={() => setOpenBookPopup(false)} />
      </header>
      </div>
    </body>
  );
}

export default App;
