import React from "react";
import { Button } from "../../components/Button/Button";
import { NavBar } from "../../components/LayoutHome/NavBar/NavBar";
import { useHistory } from "react-router-dom";
import { SliderFilter } from "../../components/SliderFilter/SliderFilter";

export function SearchProfile() {
  const history = useHistory();

  function onClick() {
    history.push("/profile");
  }

  return (
    <div>
      <SliderFilter />
      <Button
        width="185px"
        background="#2767BC"
        height="32px"
        borderRadius="10px"
        className="btn btn-font1 btn-text"
        onClick={onClick}
      >
        Mostrar todos perfis
      </Button>
      <NavBar statusSearch={true} statusHome={false} statusChat={false} />
    </div>
  );
}

