import { Button } from "../../components/Button/Button";
import ContainerCard from "../../components/ContainerCard/containerCard";
import "./Profile.scss";
import { profiles } from "../../mocks/Profiles";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { NavBar } from "../../components/LayoutHome/NavBar/NavBar";
import ThumbUp from "../../assets/icons/thumb_up_24px.svg";
import ThumbDown from "../../assets/icons/thumb_down_24px.svg";
import avaliacao from "../../assets/images/Avaliação.png"

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
          <>
            <img src={option.img} alt="Imagem Perfil"></img>
            <img src={avaliacao} alt="Avaliação"></img>
            <div>{option.preferences}</div>
            <ContainerCard
              width="335px"
              height="140px"
              className="container-profile"
              text={`Gostaria de conversar com ${option.name}?`}
            >
              <div className="btn-container" key={option.id}>
                <img
                  src={ThumbDown}
                  alt="Não"
                  onClick={() =>
                    currentProfile === 2
                      ? history.push("/search-profile")
                      : setProfile(option.id + 1)
                  }
                ></img>

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
                <img
                  src={ThumbUp}
                  alt="Sim"
                  onClick={() =>
                    currentProfile === 2
                      ? history.push("/search-profile")
                      : setProfile(option.id + 1)
                  }
                ></img>
              </div>
            </ContainerCard>
          </>
        );
      })}
      <NavBar statusSearch={true} statusHome={false} statusChat={false} />
    </div>
  );
}
