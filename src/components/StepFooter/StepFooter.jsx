import "./StepFooter.scss";

export default function footer({onSubmit}) {
  return (
    <div className="footer">
      <span id="anterior">
        Anterior
      </span>
      <span id="proximo" onClick={onSubmit}>
        Confirmar
      </span>
    </div>
  );
}
