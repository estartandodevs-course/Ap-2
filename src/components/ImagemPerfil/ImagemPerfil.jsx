import imgPerfil from "../../assets/images/avatar.svg";
import "./ImagemPerfil.scss";

export default function ImagemPerfil() {
  return (
    <div className="imageUpload">
    <label htmlFor="fileInput">
      <img src={imgPerfil} alt="" id="imagem"/>
    </label>
    <input id="fileInput" type="file" accept="image/png,image/jpg" onChange={mudarFotoCadastro} />
  </div>
  );
}
function mudarFotoCadastro(event){
  if(event.target.files.length > 0){
    let src = URL.createObjectURL(event.target.files[0]);
    let preview = document.getElementById("imagem");
    preview.src = src;
    preview.style.borderRadius="50%";
    console.log(event.target.files[0]);
    console.log(src);
  } 
}