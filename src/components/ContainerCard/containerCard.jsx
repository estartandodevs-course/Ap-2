import "./containerCard.scss";

export default function ContainerCard(props) {
  const { text, image, className, children } = props;
  return (
    <div className={className}>
      <img src={image} className="image" alt=""></img>
      <p className="text">{text}</p>
      {children}
    </div>
  );
}
