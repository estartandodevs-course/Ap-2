import { StepHeader } from "../../components/StepHeader/StepHeader";
import step1 from "../../assets/images/step1.png";
import { InputText } from "../../components/InputText/InputText";
import ImagemPerfil from "../../components/ImagemPerfil/ImagemPerfil";
import "../../components/ImagemPerfil/ImagemPerfil";
import { RegisterHeader } from "../../components/header-step1/HeaderStep1";
import { InputDate } from "../../components/InputDate/InputDate";
import './RegisterFirstStep.scss';
import { ContainerSelect } from "../../components/ContainerSelect/ContainerSelect";


export function RegisterFirstStep() {
  const isRequired = true;
  return (
    <div className="content">
      <RegisterHeader>
          <StepHeader content="Sobre você" src={step1} alt="Steps"></StepHeader>
          <ImagemPerfil />
          <InputText
            colorInput="rgba(255,255,255,1)"
            colorLabel="rgba(251,251,251,1)"
            label="Nome"
            isRequired={isRequired}
          />
      </RegisterHeader>
      <section className="form">
        <InputDate />
        <ContainerSelect />
        <InputText
          colorInput="rgba(204,204,204,1)"
          colorLabel="rgba(39,103,188,1)"
          label="Escreva uma bio curta sobre você"
          isRequired={isRequired}
          className="input-bio"
        />
      </section>
    </div>
  );
}
