import React from 'react';
import AppHeader from './components/AppHeader';
import Dice from './components/Dice'
import ListGroup from 'react-bootstrap/ListGroup'
import './App.css';

function App() {
  return (
    
    <div className="App">
      <AppHeader/>
    <ListGroup variant="flush">
      <ListGroup.Item>
        <Dice diceSize={100}/>
      </ListGroup.Item>
      <ListGroup.Item>
        <Dice diceSize={20}/>
      </ListGroup.Item>
      <ListGroup.Item>
        <Dice diceSize={12}/>
      </ListGroup.Item>
      <ListGroup.Item>
        <Dice diceSize={6}/>
      </ListGroup.Item>
    </ListGroup>
    </div>
  );
}

export default App;
