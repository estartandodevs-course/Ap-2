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
import { createUser } from "../../services/user.service";
import { useHistory } from "react-router-dom";

const initialFormState = {
  name: "",
  college: "",
  company: "",
  bio: "",
  dateBirth: "",
  gender: "",
  email: "",
  password: "",
  hobbies: ["Cozinhar", "Tocar instrumentos", "Academia"],
  interests: [
    "Engenharia",
    "Tecnologia",
    "Desenvolvimento de Software",
    "Música",
    "Arte",
  ],
  goals: {
    quantityPeople: 2,
    maxMonthAmount: "R$ 800,00",
    livingLocation: "Universidade Federal de Minas Gerais",
    mainGoal: "Dividir valor do aluguel",
  },
  experience: {
    timeSpent: "6 meses - 1 ano",
    totalShared: 2,
    sharedApHouse: true,
    troubleLiving: "Sim",
    totalPeople: 3,
    sharedRoom: true,
  },
};

export function RegisterFirstStep() {
  const isRequired = true;
  const history = useHistory();

  const [form, setForm] = useState(initialFormState);

  function handleChange(name, value) {
    setForm({
      ...form,
      [name]: value,
    });
  }

  function voltar(){
    history.push("/login");
  }
  async function onSubmit() {
    await createUser(form).then(voltar());
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
        <InputText
          type="text"
          label="Email"
          isRequired={isRequired}
          colorLabel="rgba(39,103,188,1)"
          colorInput="rgba(204,204,204,1)"
          classInput="input"
          className="input-bio"
          name="email"
          setValue={(value) => handleChange("email", value)}
          value={form.email}
        />

        <InputText
          type="password"
          label="Senha"
          isRequired={isRequired}
          colorLabel="rgba(39,103,188,1)"
          colorInput="rgba(204,204,204,1)"
          classInput="input"
          className="input-bio"
          name="password"
          setValue={(value) => handleChange("password", value)}
          value={form.password}
        />

        <InputDate
          value={form.dateBirth}
          onChange={(event) => handleChange("dateBirth", event.target.value)}
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

      <Footer onSubmit={onSubmit} voltar={voltar}/>
    </div>
  );
}
