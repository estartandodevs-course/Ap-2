import React from "react";
import { Button } from "../../components/Button/Button";
import Preferencias from "../../components/Preferencias/Preferencias";
import {vetorImage, vetorImage2} from "../../mocks/imagesPreferences";

export function SearchProfile() {
  return (
    <div>
      <Button
        width="185px"
        background="#2767BC"
        height="32px"
        borderRadius="10px"
        className="btn btn-font1 btn-text"
      >
        Mostrar todos perfis
      </Button>
      <Preferencias vetorImage={vetorImage}/>
      <Preferencias vetorImage={vetorImage2}/>
    </div>
  );
}
