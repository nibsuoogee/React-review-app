import './App.css';
import ReviewPopup from './components/ReviewPopup/ReviewPopup';
import Menu from './components/Menu/Menu.js';
import { useState } from 'react';

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  
  // Mediakappaleiden tila säilötään vaikka tässä globaalilla tasolla mediaItemsiin
  // tämä tila syötetään alas esim karuselliin sekä popupiin
  const [mediaItems, setMediaItems] = useState([
    {
      id: 1,
      title: "1984",
      author: "George Orwell",
      review: "One of the books of all time, highly recommend to anyone interested in society and surveillance.",
      image: "https://kbimages1-a.akamaihd.net/a5312ed2-bc80-4f4c-972b-c24dc5990bd5/166/300/False/george-orwell-1984-4.jpg",
      stars: 4
    }
  ]);

  

  return (
    <body>
    <div className="App">
      <header className="App-header">
        <Menu />
        <button onClick={() => setButtonPopup(true)}>Open Review Popup</button>
        <ReviewPopup trigger={buttonPopup} setTrigger={setButtonPopup} mediaItems={mediaItems}>
          <h3>Review Popup</h3>
        </ReviewPopup>
      </header>
      </div>
    </body>
  );
}

export default App;
