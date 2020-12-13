import "./ViewFullProfile.scss";
import { userFullProfile } from "../../mocks/UserFullProfile";
import { StepHeader } from "../../components/StepHeader/StepHeader";
import { RegisterHeader } from "../../components/HeaderStep1/HeaderStep1";
import back from "../../assets/icons/arrow_back_ios_24px.svg";
import { useState } from "react";
import Typography from "../../components/Typography/Typography";
import { useHistory } from "react-router-dom";

export function ViewFullProfile() {
  const [currentProfile, setProfile] = useState(1);
  const history = useHistory();
  
  let showCurrentProfile = userFullProfile.filter((option) => {
    return option.id === currentProfile;
  });

  return (
    <div>
      {showCurrentProfile.map((option) => {
        return (
          <RegisterHeader height="100%" width="auto" className="content">
            <StepHeader
              content="Voltar"
              src={back}
              alt="Voltar"
              className="flex-start"
              onClick={() => history.push("/profile")}
            />
            <Typography type="bigTitle">{option.name}</Typography>
          </RegisterHeader>
        );
      })}
    </div>
  );
}
