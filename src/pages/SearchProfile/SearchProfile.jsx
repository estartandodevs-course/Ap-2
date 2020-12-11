import React from "react";
import { Button } from "../../components/Button/Button";
import { NavBar } from "../../components/LayoutHome/NavBar/NavBar";

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

      <NavBar statusSearch={true} statusHome={false} statusChat={false} />
    </div>
  );
}
