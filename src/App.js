import logo from './logo.svg';
import './App.css';
import ReviewPopUp from './components/ReviewPopup';
import { useState } from 'react';

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => setButtonPopup(true)}>Open Review Popup</button>
        <ReviewPopUp trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h3>Review Popup</h3>
        </ReviewPopUp>
      </header>
    </div>
  );
}

export default App;
