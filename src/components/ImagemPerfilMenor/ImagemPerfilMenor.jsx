import imgPerfilMenor from "../../assets/images/fotoPerfilMenor.svg";
import "./ImagemPerfilMenor.scss";

export default function ImagemPerfilMenor() {
  return (
    <div className="imagem">
    <img src={imgPerfilMenor} alt="" id="imagemMenor"/>
  </div>
  );
}