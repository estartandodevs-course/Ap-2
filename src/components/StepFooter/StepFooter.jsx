import "./StepFooter.scss";

export default function footer({onSubmit, voltar}) {
  return (
    <div className="footer">
      <span id="anterior" onClick={voltar}>
        Anterior
      </span>
      <span id="proximo" onClick={onSubmit}>
        Confirmar
      </span>
    </div>
  );
}
