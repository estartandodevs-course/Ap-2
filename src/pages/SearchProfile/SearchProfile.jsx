import React from "react";
import { Button } from "../../components/Button/Button";
import { RegisterHeader } from "../../components/HeaderStep1/HeaderStep1";
import { NavBar } from "../../components/LayoutHome/NavBar/NavBar";
import { SelectOptions } from "../../components/SelectOptions/SelectOptions";
import { StepHeader } from "../../components/StepHeader/StepHeader";
import Typography from "../../components/Typography/Typography";
import './SearchProfile.scss';
import {options} from  '../../mocks/GenderOptions';
import Checkbox from "../../components/Checkbox/Checkbox";

export function SearchProfile() {
  return (
    <div className="searchProfile-content">
      <RegisterHeader height="76px" className="registerHeader">
        <StepHeader content="O perfil perfeito" className="step-container center"/>
      </RegisterHeader>
      <main>
        <Typography type="bigLabel">Filtrar por:</Typography>
        <SelectOptions options={options} content="Gênero:" />
        <SelectOptions options={options} content="Faixa de idade:"/>

        

        <Checkbox
          content="Gostaria de morar com estudantes"
          for="check3"
          id="check3"
          classInput="input1"
          className="input-bio"
          label="Faculdade/Escola"
        />

        <Checkbox
          content="Gostaria de morar pessoas que trabalham"
          for="check4"
          id="check4"
          classInput="input2"
          className="input-bio"
          label="Faculdade/Escola"
        />
        <Checkbox
          content="Prefiro morar com pessoas que já dividiram apartamento anteriormente"
          for="check5"
          id="check5"
          classInput="input1"
          className="input-bio"
          label="Faculdade/Escola"
        />

        <Checkbox
          content="Gostaria de morar com pessoas que tem o mesmo motivo para dividir que eu"
          for="check6"
          id="check6"
          classInput="input2"
          className="input-bio"
          label="Faculdade/Escola"
        />

        <Checkbox
          content="Aceito ver perfis próximos da localidade de interesse indicada"
          for="check7"
          id="check7"
          classInput="input2"
          className="input-bio"
          label="Faculdade/Escola"
        />

        <Button
          width="185px"
          background="#2767BC"
          height="32px"
          borderRadius="10px"
          className="btn btn-font1 btn-text"
        >
          Mostrar todos perfis
        </Button>

        <SliderFilter />
      </main>

      <NavBar statusSearch={true} statusHome={false} statusChat={false} />
    </div>
  );
}