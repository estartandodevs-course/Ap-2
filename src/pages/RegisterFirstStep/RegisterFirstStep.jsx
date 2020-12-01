import { StepHeader } from "../../components/StepHeader/StepHeader";
import step1 from "../../assets/images/step1.png";
import { InputText } from "../../components/InputText/InputText";
import ImagemPerfil from "../../components/ImagemPerfil/ImagemPerfil";
import "../../components/ImagemPerfil/ImagemPerfil";
import { InputDate } from "../../components/InputDate/InputDate";
import Checkbox from "../../components/Checkbox/Checkbox"
import { ContainerSelect } from "../../components/ContainerSelect/ContainerSelect";
import Footer from "../../components/footer/footer.jsx";

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
      <InputDate />
      <Checkbox content="Você é estudante?" label="check" id="check" classInput="input1" placeHolder="Faculdade/Escola:"></Checkbox>
      <Checkbox content="Você trabalha?" label="check2" id="check2" classInput="input2" placeHolder="Empresa:"> </Checkbox>
      <ContainerSelect />
      <Footer></Footer>
    </>
  );
}
