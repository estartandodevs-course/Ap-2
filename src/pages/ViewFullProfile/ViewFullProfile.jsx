import "./ViewFullProfile.scss";
import { userFullProfile } from "../../mocks/UserFullProfile";
import { StepHeader } from "../../components/StepHeader/StepHeader";
import { RegisterHeader } from "../../components/HeaderStep1/HeaderStep1";
import back from "../../assets/icons/arrow_back_ios_24px.svg";
import { useEffect, useState } from "react";
import Typography from "../../components/Typography/Typography";
import { useHistory } from "react-router-dom";
import { NavBar } from "../../components/LayoutHome/NavBar/NavBar";
import { InputText } from "../../components/InputText/InputText";
import { useParams } from "react-router";
import { Slider } from "../../components/Slider/Slider";

export function ViewFullProfile() {
  let { id } = useParams();

  const [currentProfile, setProfile] = useState(1);
  const history = useHistory();

  useEffect(() => {
    setProfile(userFullProfile[0]);
  }, []);

  let showCurrentProfile = userFullProfile.find((option) => {
    return option.id === id;
  });

  
  return <div></div>;
  return (
    <div className="full-profile">
      {/* {showCurrentProfile.map((option) => { */}
      {/* return ( */}
      <>
        <RegisterHeader height="100%" width="auto" className="content">
          <StepHeader
            content="Voltar"
            src={back}
            alt="Voltar"
            className="flex-start"
            onClick={() => history.push("/profile")}
          />
          <Typography type="bigTitle" className="typography">
            {currentProfile.name}
          </Typography>
        </RegisterHeader>

        <div className="full-profile-content">
          <Typography type="bigTitle" className="title">
            Personalidade
            <hr></hr>
          </Typography>

          <div className="slider-container">
            <Typography type="label">Calma Agitada</Typography>
            <Slider RangeMin={-3} RangeMax={3} readOnly={true}></Slider>
            <Typography type="label">Organizado Relaxada</Typography>
            <Slider RangeMin={-3} RangeMax={3}></Slider>
            <Typography type="label">Introvertida Extrovertida</Typography>
            <Slider RangeMin={-3} RangeMax={3}></Slider>
            <Typography type="label">Curte conversar Mais na minha</Typography>
            <Slider RangeMin={-3} RangeMax={3}></Slider>
          </div>

          <div className="modals">
            <Typography type="label">Hobbies</Typography>
            <div className="modal-content">
              {currentProfile.hobbies.map((element) => {
                return <span>{element.hobbie}</span>;
              })}
            </div>
          </div>

          <div className="modals">
            <Typography type="label">Interesses</Typography>
            <div className="modal-content">
              {currentProfile.interests.map((element) => {
                return <span>{element.interest}</span>;
              })}
            </div>
          </div>

          <Typography type="bigTitle" className="title">
            Experiências
            <hr></hr>
          </Typography>

          <div className="questions-check">
            <input type="checkbox" checked readOnly={true} />
            <Typography type="label">
              {currentProfile.experience.sharedApHouse}
            </Typography>
          </div>
          <div className="questions-check">
            <input type="checkbox" checked readOnly={true} />
            <Typography type="label">
              {currentProfile.experience.sharedRoom}
            </Typography>
          </div>

          <Typography type="label" className="totals">
            Quantos apartamentos/casas você ja dividiu?
            <span>{currentProfile.experience.totalShared}</span>
          </Typography>

          <Typography type="label" className="totals">
            Com quantas pessoas você dividiu?
            <span>{currentProfile.experience.totalPeople}</span>
          </Typography>

          <div className="option-selected">
            <Typography type="label" className="text-content">
              Quanto tempo passou dividindo?
            </Typography>
            <hr></hr>
            <div className="color-content">
              {currentProfile.experience.timeSpent}
            </div>
          </div>

          <div className="option-selected">
            <Typography type="label" className="text-content">
              Já teve problemas de convivência?
            </Typography>
            <hr></hr>
            <div className="color-content">
              {currentProfile.experience.troubleLiving}
            </div>
          </div>
          <InputText
            type="text"
            colorInput="rgba(204,204,204,1)"
            colorLabel="rgba(39,103,188,1)"
            label="Se quiser, descreva como foi sua experiência"
            className="input-bio"
            classInput="input-text"
          />

          <Typography type="bigTitle" className="title">
            Objetivos
            <hr></hr>
          </Typography>

          <div className="option-selected">
            <Typography type="label" className="text-content">
              Qual seu principal motivo para dividir apartamento/casa?
            </Typography>
            <hr></hr>
            <div className="color-content">
              {currentProfile.goals.mainGoal}
            </div>
          </div>

          <div className="option-selected">
            <Typography type="label" className="text-content">
              Qual local você quer morar?
            </Typography>
            <hr></hr>
            <div className="color-content">
              {currentProfile.goals.livingLocation}
            </div>
          </div>

          <Typography type="label" className="totals">
            Com quantas pessoas gostaria de dividir?
            <span>{currentProfile.goals.quantityPeople}</span>
          </Typography>

          <div className="option-selected">
            <Typography type="label" className="text-content no-image">
              Valor mensal máximo: {currentProfile.goals.maxMonthAmount}
            </Typography>
          </div>
        </div>
      </>
      {/* ); */}
      {/* })} */}
      <NavBar statusSearch={true} statusHome={false} statusChat={false} />
    </div>
  );
}
