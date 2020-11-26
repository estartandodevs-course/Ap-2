export function StepHeader({ content, icon }) {
  return (
    <div>
      <h1>{content}</h1>
      <img src={icon}></img>
    </div>
  );
}
