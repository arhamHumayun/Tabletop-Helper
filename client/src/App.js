import React from 'react';
import AppHeader from './components/AppHeader';
import Dice from './components/Dice'
import './App.css';

function App() {
  return (
    <div className="App">
      <AppHeader/>
      <Dice diceSize={20}/>
      <Dice diceSize={100}/>
    </div>
  );
}

export default App;
