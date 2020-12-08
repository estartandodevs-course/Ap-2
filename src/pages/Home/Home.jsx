import React from "react";
import BackgroundHome from "../../components/BackgroundHome/BackgroundHome.jsx";
import ImagemPerfilMenor from "../../components/ImagemPerfilMenor/ImagemPerfilMenor";
import ContainerCard from "../../components/ContainerCard/containerCard";
import './Home.scss';
import imgContainerPic from "../../assets/images/containerImage.svg";
import imgContainerAgenda1 from "../../assets/icons/IconeAgenda1.svg";
import imgContainerAgenda2 from "../../assets/icons/IconeAgenda2.svg";
import { Button } from "../../components/Button/Button";
import { useHistory } from "react-router-dom";
import "./Home.scss";
import { SideMenu } from "../../components/SideMenu/SideMenu.jsx";

import iconNotif from '../../assets/icons/icon-notificações.svg';
import iconMatches from '../../assets/icons/icon-matches.svg';
import iconCalendar from '../../assets/icons/icon-calendar.svg';
import iconConfig from '../../assets/icons/icon-config.svg';
import Notif from '../../assets/icons/Notificação.svg';

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
        <ContainerCard image={imgContainerPic} text="Maria também gostaria de conversar com você" className="containerNotificacao"/>
        <ContainerCard image={imgContainerPic} text="Maria também gostaria de conversar com você" className="containerNotificacao"/>
        <ContainerCard image={imgContainerPic} text="Maria também gostaria de conversar com você" className="containerNotificacao"/>
        <ContainerCard image={imgContainerAgenda1} text="Encontro com Maria!" className="containerAgenda"/>
        <ContainerCard image={imgContainerAgenda2} text="Encontro com Julia!" className="containerAgenda"/>
      </BackgroundHome>
      <side className="side-menu">
        <SideMenu src={iconNotif} notif={Notif} />
        <SideMenu src={iconCalendar} notif={Notif} />
        <SideMenu src={iconMatches} notif={Notif} />
        <SideMenu src={iconConfig} notif={Notif} />
      </side>
      
    </div>
  );
}
