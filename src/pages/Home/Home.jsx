import React from 'react';
import BackgroundHome from '../../components/BackgroundHome/BackgroundHome.jsx';
import ImagemPerfilMenor from "../../components/ImagemPerfilMenor/ImagemPerfilMenor";
import ContainerCard from "../../components/ContainerCard/containerCard";
import './Home.scss';
import imgContainerPic from "../../assets/images/containerImage.svg";
import imgContainerAgenda1 from "../../assets/icons/IconeAgenda1.svg";
import imgContainerAgenda2 from "../../assets/icons/IconeAgenda2.svg";

export function Home(){
    return (
        <>
        
        <BackgroundHome>
        <ImagemPerfilMenor/>  
        <ContainerCard image={imgContainerPic} text="Maria também gostaria de conversar com você" className="containerNotificacao"/>
        <ContainerCard image={imgContainerPic} text="Maria também gostaria de conversar com você" className="containerNotificacao"/>
        <ContainerCard image={imgContainerPic} text="Maria também gostaria de conversar com você" className="containerNotificacao"/>
        <ContainerCard image={imgContainerAgenda1} text="Encontro com Maria!" className="containerAgenda"/>
        <ContainerCard image={imgContainerAgenda2} text="Encontro com Julia!" className="containerAgenda"/>
        </BackgroundHome>
        
        </>
     )
}