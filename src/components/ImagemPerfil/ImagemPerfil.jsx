import imgPerfil from "../../assets/images/avatar.svg";
import "./ImagemPerfil.scss";
export default function ImagemPerfil() {
  return (
    <div className="imageUpload">
    <label for="fileInput">
      <img src={imgPerfil} alt="GG" className="img"/>
    </label>
    <input id="fileInput" type="file" />
  </div>
  );
}
