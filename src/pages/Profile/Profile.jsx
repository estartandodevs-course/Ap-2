import { Button } from "../../components/Button/Button";
import ContainerCard from "../../components/ContainerCard/containerCard";
import "./Profile.scss";
import { profiles } from "../../mocks/Profiles";
import React, { useState } from "react";
import check from "../../assets/icons/check-symbol.png";
import { useHistory } from "react-router-dom";

export function Profile() {
  const [currentProfile, setProfile] = useState(1);
  const history = useHistory();

  let showCurrentProfile = profiles.filter((option) => {
    return option.id === currentProfile;
  });

  return (
    <div className="profile-container">
      {showCurrentProfile.map((option) => {
        return (
          <ContainerCard
            width="335px"
            height="140px"
            className="container-profile"
            text={`Gostaria de conversar com ${option.name}?`}
          >
            <div className="btn-container" key={option.id}>
              <Button
                width="48px"
                height="48px"
                background="#A73027"
                borderRadius="50%"
                className="btn"
                onClick={() =>
                  currentProfile === 2
                    ? history.push("/search-profile")
                    : setProfile(option.id + 1)
                }
              >
                <span>&#x2716;</span>
              </Button>
              <Button
                width="99px"
                height="48px"
                background="#184177"
                borderRadius="10px"
                className="btn btn-font2 btn-text btn-line"
                onClick={() => history.push("view-full-profile")}
              >
                Ver perfil completo
              </Button>
              <Button
                width="48px"
                height="48px"
                background="#37923B"
                borderRadius="50%"
                className="btn"
                onClick={() =>
                  currentProfile === 2
                    ? history.push("/search-profile")
                    : setProfile(option.id + 1)
                }
              >
                <img src={check} alt="OK"></img>
              </Button>
            </div>
          </ContainerCard>
        );
      })}
    </div>
  );
}
