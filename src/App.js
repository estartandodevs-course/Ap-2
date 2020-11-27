import React from 'react';
import { InputText } from './components/InputText/InputText';
import ImagemPerfil from './components/ImagemPerfil/ImagemPerfil';
import './components/ImagemPerfil/ImagemPerfil';

function App() {

  const isRequired=true;

  return (
    <>
    <ImagemPerfil/>
    <InputText colorInput="rgba(255,255,255,1)" colorLabel="rgba(251,251,251,1)" label="Nome" isRequired={isRequired}/>
    </>
  );
}

export default App;
