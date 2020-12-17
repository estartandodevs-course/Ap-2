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
import { useState } from "react";
import { Button } from "../../components/Button/Button";
//import { createUser } from "../../services/user.service";

export function RegisterFirstStep() {
  const isRequired = true;

  const [form, setForm] = useState({
    name: "",
    college: "",
    company: "",
    bio: "",
    date: "",
    gender: "",
  });

  function handleChange(name, value) {
    setForm({
      ...form,
      [name]: value,
    });
    console.log(form);
  }

  function onSubmit() {
   // createUser(form);
   console.log(form)
  }

  return (
    <div className="content">
      <RegisterHeader height="340px" className="registerHeader">
        <StepHeader
          content="Sobre você"
          src={step1}
          alt="Steps"
          className="step-container"
        />
        <ImagemPerfil />
        <InputText
          type="text"
          colorInput="rgba(251,251,251,1)"
          colorLabel="rgba(255,255,255,1)"
          label="Nome"
          isRequired={isRequired}
          name="name"
          setValue={(value) => handleChange("name", value)}
          value={form.name}
        />
      </RegisterHeader>
      <section className="form">
        <InputDate
          value={form.date}
          onChange={(event) => handleChange("date", event.target.value)}
        />
        <SelectOptions
          options={options}
          content="Gênero:"
          setValue={(value) => handleChange("gender", value)}
        />

        <Checkbox
          content="Você é estudante?"
          for="check"
          id="check"
          classInput="input1"
        >
          <InputText
            type="text"
            label="Faculdade/Escola"
            isRequired={isRequired}
            colorLabel="rgba(39,103,188,1)"
            colorInput="rgba(204,204,204,1)"
            classInput="input1"
            className="input-bio"
            name="college"
            setValue={(value) => handleChange("college", value)}
            value={form.college}
          />
        </Checkbox>

        <Checkbox
          content="Você trabalha?"
          for="check2"
          id="check2"
          classInput="input2"
        >
          <InputText
            type="text"
            label="Empresa"
            isRequired={isRequired}
            colorLabel="rgba(39,103,188,1)"
            colorInput="rgba(204,204,204,1)"
            classInput="input2"
            className="input-bio"
            name="company"
            setValue={(value) => handleChange("company", value)}
            value={form.company}
          />
        </Checkbox>

        <InputText
          type="text"
          colorInput="rgba(204,204,204,1)"
          colorLabel="rgba(39,103,188,1)"
          label="Escreva uma bio curta sobre você"
          isRequired={isRequired}
          className="input-bio"
          name="bio"
          setValue={(value) => handleChange("bio", value)}
          value={form.bio}
        />
      </section>

      <Button width="80px" height="30px" onClick={onSubmit}>
        Cadastrar
      </Button>
      <Footer></Footer>
    </div>
  );
}
