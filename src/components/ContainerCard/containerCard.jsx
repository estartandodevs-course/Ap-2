import "./containerCard.scss";

export default function ContainerCard(props) {
  const { text, image, className, children, width, height } = props;
  return (
    <div className={className} style={{ width: width, height: height }}>
      <img src={image} className="image" alt=""></img>
      <p className="text">{text}</p>
      {children}
    </div>
  );
}
