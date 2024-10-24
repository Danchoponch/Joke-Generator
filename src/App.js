import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'

function App() {
  // Urls of api
  const baseUrl = 'https://v2.jokeapi.dev/joke/';
  const blacklistFlags = 'nsfw,sexist,religious,political,racist,explicit&type=single&amount=1';
  //needed variables 
  const [joke, setJoke] = useState('');
  const [category, setCategory] = useState('');
  const [showJoke, setShowJoke] = useState(false);

  //function thats is called on button click; it fetches data from api
  const fetchJoke = (categoryType) => {
    const url = `${baseUrl}${categoryType}?format=json&blacklistFlags=${blacklistFlags}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (!data.error) {
          setCategory(data.category);
          setJoke(data.joke);
          setShowJoke(true);
        }
      })
      .catch((error) => {
        console.error('Error fetching joke:', error);
      });
  };

  return (
    <div className={`AppContainer ${category.toLowerCase()}`}>
    <div className={`App ${category.toLowerCase()}`}>
      {showJoke ? (
        <div className="joke-container">
          <h1>{joke}</h1>
        </div>
      ) : (
        <h1>Get a joke</h1>
      )}
      <div className="button-container">
        <button onClick={() => fetchJoke('Any')}>I'm feeling lucky</button>
        <button onClick={() => fetchJoke('Misc')}>Misc</button>
        <button onClick={() => fetchJoke('Programming')}>Programming</button>
        <button onClick={() => fetchJoke('Dark')}>Dark</button>
        <button onClick={() => fetchJoke('Pun')}>Pun</button>
        <button onClick={() => fetchJoke('Spooky')}>Spooky</button>
        <button onClick={() => fetchJoke('Christmas')}>Christmas</button>
      </div>
    </div>
    </div>
  );
}

export default App;
