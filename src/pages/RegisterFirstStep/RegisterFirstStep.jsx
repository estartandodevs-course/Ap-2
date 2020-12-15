import { StepHeader } from "../../components/StepHeader/StepHeader";
import step1 from "../../assets/images/step1.png";
import { InputText } from "../../components/InputText/InputText";
import ImagemPerfil from "../../components/ImagemPerfil/ImagemPerfil";
import "../../components/ImagemPerfil/ImagemPerfil";
import { InputDate } from "../../components/InputDate/InputDate";
import "./RegisterFirstStep.scss";
import Checkbox from "../../components/Checkbox/Checkbox";
import { SelectOptions } from "../../components/SelectOptions/SelectOptions";
import { RegisterHeader } from "../../components/HeaderStep1/HeaderStep1";
import Footer from "../../components/StepFooter/StepFooter";
import { options } from "../../mocks/GenderOptions";

export function RegisterFirstStep() {
  const isRequired = true;
  return (
    <div className="content">
      <RegisterHeader height="340px" className="registerHeader">
        <StepHeader content="Sobre você" src={step1} alt="Steps" className="step-container"/>
        <ImagemPerfil />
        <InputText
          type="text"
          colorInput="rgba(251,251,251,1)"
          colorLabel="rgba(255,255,255,1)"
          label="Nome"
          isRequired={isRequired}
        />
      </RegisterHeader>
      <section className="form">
        <InputDate />
        <SelectOptions options={options} content="Gênero:" />
        <Checkbox
          content="Você é estudante?"
          for="check"
          id="check"
          classInput="input1"
        >
          <InputText type="text" label="Faculdade/Escola" isRequired={isRequired} colorLabel="rgba(39,103,188,1)" colorInput="rgba(204,204,204,1)" classInput="input1" className="input-bio"/>
        </Checkbox>

        <Checkbox
          content="Você trabalha?"
          for="check2"
          id="check2"
          classInput="input2"
        > 
          <InputText type="text" label="Empresa" isRequired={isRequired} colorLabel="rgba(39,103,188,1)" colorInput="rgba(204,204,204,1)" classInput="input2" className="input-bio"/>
        </Checkbox>
        
        <InputText
          type="text"
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
