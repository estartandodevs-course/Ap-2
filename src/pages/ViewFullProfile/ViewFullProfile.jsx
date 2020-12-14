import "./ViewFullProfile.scss";
import { userFullProfile } from "../../mocks/UserFullProfile";
import { StepHeader } from "../../components/StepHeader/StepHeader";
import { RegisterHeader } from "../../components/HeaderStep1/HeaderStep1";
import back from "../../assets/icons/arrow_back_ios_24px.svg";
import { useState } from "react";
import Typography from "../../components/Typography/Typography";
import { useHistory } from "react-router-dom";
import { NavBar } from "../../components/LayoutHome/NavBar/NavBar";

export function ViewFullProfile() {
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

              </div>
            </div>
          </>
        );
      })}
      <NavBar statusSearch={true} statusHome={false} statusChat={false} />
    </div>
  );
}
