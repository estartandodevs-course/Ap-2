import "./ViewFullProfile.scss";
import { userFullProfile } from "../../mocks/UserFullProfile";
import { StepHeader } from "../../components/StepHeader/StepHeader";
import { RegisterHeader } from "../../components/HeaderStep1/HeaderStep1";
import back from "../../assets/icons/arrow_back_ios_24px.svg";
import { useState } from "react";
import Typography from "../../components/Typography/Typography";
import { useHistory } from "react-router-dom";
import { NavBar } from "../../components/LayoutHome/NavBar/NavBar";
import { InputText } from "../../components/InputText/InputText";
import { useParams } from 'react-router';

export function ViewFullProfile() {
  let { id } = useParams();

  const [currentProfile, setProfile] = useState(1);
  const history = useHistory();
  

  let showCurrentProfile = userFullProfile.filter((option) => {
    return option.id === currentProfile;
  });

  return (
    <div className="full-profile">
      {showCurrentProfile.map((option) => {
        return (
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
                {option.name}
              </Typography>
            </RegisterHeader>

            <div className="full-profile-content">
              <Typography type="bigTitle" className="title">
                Personalidade
                <hr></hr>
              </Typography>
              <div className="modals">
                <Typography type="label">Hobbies</Typography>
                <div className="modal-content">
                  {option.hobbies.map((element) => {
                    return <span>{element.hobbie}</span>;
                  })}
                </div>
              </div>

              <div className="modals">
                <Typography type="label">Interesses</Typography>
                <div className="modal-content">
                  {option.interests.map((element) => {
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
                  {option.experience.sharedApHouse}
                </Typography>
              </div>
              <div className="questions-check">
                <input type="checkbox" checked readOnly={true} />
                <Typography type="label">
                  {option.experience.sharedRoom}
                </Typography>
              </div>

              <Typography type="label" className="totals">
                Quantos apartamentos/casas você ja dividiu?
                <span>{option.experience.totalShared}</span>
              </Typography>

              <Typography type="label" className="totals">
                Com quantas pessoas você dividiu?
                <span>{option.experience.totalPeople}</span>
              </Typography>

              <div className="option-selected">
                <Typography type="label" className="text-content">
                  Quanto tempo passou dividindo?
                </Typography>
                <hr></hr>
                <div className="color-content">
                  {option.experience.timeSpent}
                </div>
              </div>

              <div className="option-selected">
                <Typography type="label" className="text-content">
                  Já teve problemas de convivência?
                </Typography>
                <hr></hr>
                <div className="color-content">
                  {option.experience.troubleLiving}
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
                <div className="color-content">{option.goals.mainGoal}</div>
              </div>

              <div className="option-selected">
                <Typography type="label" className="text-content">
                  Qual local você quer morar?
                </Typography>
                <hr></hr>
                <div className="color-content">
                  {option.goals.livingLocation}
                </div>
              </div>

              <Typography type="label" className="totals">
                Com quantas pessoas gostaria de dividir?
                <span>{option.goals.quantityPeople}</span>
              </Typography>

              <div className="option-selected">
                <Typography type="label" className="text-content no-image" >
                  Valor mensal máximo: {option.goals.maxMonthAmount}
                </Typography>
              </div>
            </div>
          </>
        );
      })}
      <NavBar statusSearch={true} statusHome={false} statusChat={false} />
    </div>
  );
}
