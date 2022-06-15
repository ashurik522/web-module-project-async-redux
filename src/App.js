import React from 'react';
import './App.css';
import MemeList from './components/memeList';

function App() {
  return (
    <div className="App">
      <header className='header'>
        <h1>Random Meme Creator!</h1>
      </header>
      <button className='startBtn'>Get Started</button>
      <MemeList />   
    </div>
  );
}

export default App;