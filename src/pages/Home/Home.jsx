import React from 'react';
import BackgroundHome from '../../components/BackgroundHome/BackgroundHome.jsx';
import ImagemPerfilMenor from "../../components/ImagemPerfilMenor/ImagemPerfilMenor";
import ContainerCard from "../../components/ContainerCard/containerCard";
import './Home.scss';
import imgContainerPic from "../../assets/images/containerImage.svg";
import imgContainerAgenda from "../../assets/images/ImagemAgenda.svg";

export function Home(){
    return (
        <>
        
        <BackgroundHome>
        <ImagemPerfilMenor/>  
        <ContainerCard image={imgContainerPic} text="Maria também gostaria de conversar com você"/>
        <ContainerCard image={imgContainerAgenda} text="Encontro com Maria!"/>
        </BackgroundHome>
        
        </>
     )
}