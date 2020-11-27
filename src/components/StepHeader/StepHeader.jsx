import "./StepHeader.scss";

export function StepHeader(props) {
  const { content, src, alt } = props;
  return (
      <div className="step-container">
        <h1>{content}</h1>
        <img src={src} alt={alt}></img>
      </div>
  );
}
