import "./StepHeader.scss";

export function StepHeader(props) {
  const { content, src, alt, className } = props;
  return (
      <div className={className}>
        <h1>{content}</h1>
        <img src={src} alt={alt}></img>
      </div>
  );
}

//step-container