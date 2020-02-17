import React from 'react';
import './App.css';
import {Item, Item2} from './item';

function App() {
  return (
    <div className="App">
      <Item idItem="Uno"/>
      <Item idItem="Dos"/>
      <Item idItem="Tres"/>
      <Item2 />
    </div>
  );
}

export default App;
