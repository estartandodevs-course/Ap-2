import React from "react";
import BackgroundHome from "../../components/BackgroundHome/BackgroundHome.jsx";
import ImagemPerfilMenor from "../../components/ImagemPerfilMenor/ImagemPerfilMenor";
import { Button } from "../../components/Button/Button";
import { useHistory } from "react-router-dom";
import "./Home.scss";

export function Home() {
  const history = useHistory();

  function onClick() {
    history.push("/");
  }

  return (
    <div className="home-container">
      <BackgroundHome>
        <div className="profile-container">
          <ImagemPerfilMenor />
          <Button
            width="136px"
            background="#184177"
            height="32px"
            borderRadius="10px"
            className="btn btn-profile btn-font1 btn-text"
            onClick={onClick}
          >
            Editar Perfil
          </Button>
        </div>
      </BackgroundHome>
    </div>
  );
}
