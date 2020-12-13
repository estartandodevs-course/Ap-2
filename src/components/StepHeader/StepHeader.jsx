import "./StepHeader.scss";

export function StepHeader(props) {
  const { content, src, alt, className, onClick } = props;
  let classN = `${className} step-container`
  return (
      <div className={classN}>
        <h1>{content}</h1>
        <img src={src} alt={alt} onClick={onClick}></img>
      </div>
  );
}
