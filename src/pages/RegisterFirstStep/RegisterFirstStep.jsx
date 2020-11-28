import { StepHeader } from "../../components/StepHeader/StepHeader";
import step1 from "../../assets/images/step1.png";
import { InputText } from "../../components/InputText/InputText";
import ImagemPerfil from "../../components/ImagemPerfil/ImagemPerfil";
import "../../components/ImagemPerfil/ImagemPerfil";

export function RegisterFirstStep() {
  const isRequired = true;
  return (
    <>
      <StepHeader content="Sobre você" src={step1} alt="Steps"></StepHeader>
      <ImagemPerfil />
      <InputText
        colorInput="rgba(255,255,255,1)"
        colorLabel="rgba(251,251,251,1)"
        label="Nome"
        isRequired={isRequired}
      />
    </>
  );
}
