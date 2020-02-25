import React from 'react';
import './sass/main.scss';
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Pages/Main';

const miFuncion = (valor) =>{
  return valor * 2;
}


function App() {
  return (
    <div className="App">
      {/* <Comment nombre="Juan"/>
      <Comment nombre="Camilo"/>
      <Inicio multiplicar={miFuncion}/> */}
      <Header nombre="Curso React"/>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
