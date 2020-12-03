import React from 'react';
import BackgroundHome from '../../components/BackgroundHome/BackgroundHome.jsx';
import ImagemPerfilMenor from "../../components/ImagemPerfilMenor/ImagemPerfilMenor";
import './Home.scss';

export function Home(){
    return (
        <>
        <BackgroundHome></BackgroundHome>
        <ImagemPerfilMenor/>
        </>
     )
}