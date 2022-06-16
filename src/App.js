import React from 'react';
import './App.css';
import MemeList from './components/memeList';
import { connect } from 'react-redux'



function App() {

 

  return (
    <div className="App">
      <header className='header'>
        <h1>Random Meme Creator!</h1>
      </header>
      <MemeList />   
    </div>
  );
}

const mapStateToProps = state => {
  return{
      memes: state
  }
}

export default App;