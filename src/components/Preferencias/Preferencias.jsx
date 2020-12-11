import "./Preferencias.scss";

export default function Preferencias(props) {
  const {vetorImage=[]} = props;
  let cont=0;
  const listImages = vetorImage.map((vetorImage,i) =>
  {
    const teste="GG"+cont++;
    return <img src={vetorImage} alt="" key={i} id={teste}/>
  }
    
  );
  
  return (
    <div className="imagensPreferencias">
      {listImages}
  </div>
  );
}