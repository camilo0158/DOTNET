import React from 'react';
import './App.css';
import {Comment} from './components/funtionalComponents';
import Inicio from './components/Pages/Inicio';

const miFuncion = (valor) =>{
  return valor * 2;
}


function App() {
  return (
    <div className="App">
      <Comment nombre="Juan"/>
      <Comment nombre="Camilo"/>
      <Inicio multiplicar={miFuncion}/>
    </div>
  );
}

export default App;
