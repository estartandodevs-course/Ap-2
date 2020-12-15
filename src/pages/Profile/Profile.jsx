import { Button } from "../../components/Button/Button";
import ContainerCard from "../../components/ContainerCard/containerCard";
import "./Profile.scss";
import { profiles } from "../../mocks/Profiles";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { NavBar } from "../../components/LayoutHome/NavBar/NavBar";
import ThumbUp from "../../assets/icons/thumb_up_24px.svg";
import ThumbDown from "../../assets/icons/thumb_down_24px.svg";
import { StepHeader } from "../../components/StepHeader/StepHeader";
import filter from "../../assets/icons/filter.svg";
import { RegisterHeader } from "../../components/HeaderStep1/HeaderStep1";
import Typography from "../../components/Typography/Typography";
import UserRank from "../../components/ClassificaçaoUser/UserRank";
import Preferencias from "../../components/Preferencias/Preferencias";
import { vetorImage, vetorImage2 } from "../../mocks/imagesPreferences";

export function Profile() {
  const [currentProfile, setProfile] = useState(1);
  const history = useHistory();

  let showCurrentProfile = profiles.filter((option) => {
    return option.id === currentProfile;
  });

  return (
    <>
      <div className="profile-container">
        {showCurrentProfile.map((option) => {
          return (
            <>
              <RegisterHeader height="100%" width="100%" className="content">
                <StepHeader
                  content="Filtros"
                  src={filter}
                  alt="Steps"
                  className="flex-start"
                />
                <img src={option.img} alt="Imagem Perfil"></img>
                <UserRank Rank={4}></UserRank>
                <Typography type="bigTitle">
                  {option.name} - {option.age}
                </Typography>
                <Typography type="bigTitle" className="ocupation">
                  {option.ocupation}
                </Typography>
                <Typography type="textSettings" className="bio-content">
                  {option.bio}
                </Typography>
                <div className="preferences">
                  {currentProfile === 1 ? (
                    <Preferencias vetorImage={vetorImage} />
                  ) : (
                    <Preferencias vetorImage={vetorImage2} />
                  )}
                </div>
              </RegisterHeader>

              <Typography type="evaluationText">
                {`Conhece ${option.name}?`}
              </Typography>

              <ContainerCard
                width="100%"
                height="100%"
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
                       onClick={() => history.push(`/view-full-profile/${option.id}`)}
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
      </div>
      <NavBar statusSearch={true} statusHome={false} statusChat={false} />
    </>
  );
}
