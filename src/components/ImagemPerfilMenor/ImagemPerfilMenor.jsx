import "./ImagemPerfilMenor.scss";
import imgPerfil from '../../assets/images/avatar.svg';

export default function ImagemPerfilMenor() {
  return (
    <div className="imagem">
    <img src={imgPerfil} alt="" id="imagemMenor"/>
  </div>
  );
}