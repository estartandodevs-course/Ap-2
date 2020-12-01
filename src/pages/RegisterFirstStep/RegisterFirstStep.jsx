import { StepHeader } from "../../components/StepHeader/StepHeader";
import step1 from "../../assets/images/step1.png";
import { InputText } from "../../components/InputText/InputText";
import ImagemPerfil from "../../components/ImagemPerfil/ImagemPerfil";
import "../../components/ImagemPerfil/ImagemPerfil";
import { InputDate } from "../../components/InputDate/InputDate";
import "./RegisterFirstStep.scss";
import Checkbox from "../../components/Checkbox/Checkbox"
import { ContainerSelect } from "../../components/ContainerSelect/ContainerSelect";
import { RegisterHeader} from "../../components/header-step1/HeaderStep1";
import Footer from "../../components/StepFooter/StepFooter";

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
        <Checkbox
          content="Você é estudante?" 
          for="check" 
          id="check" 
          classInput="input1" 
          className="input-bio"
          label="Faculdade/Escola"

        />
        <Checkbox 
          content="Você trabalha?" 
          for="check2" 
          id="check2" 
          classInput="input2"
          className="input-bio" 
          label="Empresa"
        />
        <InputText
          colorInput="rgba(204,204,204,1)"
          colorLabel="rgba(39,103,188,1)"
          label="Escreva uma bio curta sobre você"
          isRequired={isRequired}
          className="input-bio"
        />
      </section>
      <Footer></Footer>
    </div>
  );
}
