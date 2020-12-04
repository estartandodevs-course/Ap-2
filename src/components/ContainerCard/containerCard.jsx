import "./containerCard.scss";

export default function ContainerCard(props) {
  const {text,image} = props;
  return (
    <div className="container">
      <img src={image} className="image" alt=""></img>
      <p className="text">{text}</p>
    </div>
  );
}