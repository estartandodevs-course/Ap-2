import React from 'react';
import { InputText } from './components/InputText/InputText';

function App() {

  const isRequired=true;


  return (
    <>

      <InputText colorInput="rgba(255,255,255,1)" colorLabel="rgba(251,251,251,1)" label="Nome" isRequired={isRequired}/>

    </>
  );
}

export default App;
