import "./StepHeader.scss";

export function StepHeader(props) {
  const { content, src, alt, className } = props;
  let classN = `${className} step-container`
  return (
      <div className={classN}>
        <h1>{content}</h1>
        <img src={src} alt={alt}></img>
      </div>
  );
}
