import { Button } from "../../components/Button/Button";
import ContainerCard from "../../components/ContainerCard/containerCard";
import "./Profile.scss";
import React, { useEffect, useState } from "react";
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
import { getUsers } from "../../services/user.service";
import imgPerfil from "../../assets/images/avatar.svg";
import firebase from "firebase/app";
import "firebase/auth";

export function Profile() {
  const [currentProfile, setProfile] = useState({ index: 0, profile: {} });
  const history = useHistory();
  const [profiles, setProfiles] = useState([]);

  const { profile } = currentProfile;

  function nextProfile() {
    const numberOfProfiles = profiles.length;
    if (currentProfile.index + 1 < numberOfProfiles) {
      setProfile((prev) => ({
        index: prev.index + 1,
        profile: profiles[prev.index + 1],
      }));
    }
  }

  useEffect(() => {
    (async () => {
      const data = await getUsers();
      const currentUser = await firebase.auth().currentUser;
      const userValids = data.filter(
        (user) => user.email !== currentUser.email
      );
      setProfiles(userValids);
      setProfile({ index: 0, profile: userValids[0] });
    })();
  }, []);

  function getAge(age) {
    const yearBirth = new Date(age).getFullYear();
    const currentYear = new Date().getFullYear();

    if (age !== "") {
      return currentYear - yearBirth + " anos";
    } else {
      return "";
    }
  }

  return (
    <>
      <div className="profile-container">
        <>
          <RegisterHeader height="100%" width="100%" className="content">
            <StepHeader
              content="Filtros"
              src={filter}
              alt="Steps"
              className="flex-start"
            />
            <img src={imgPerfil} alt="Imagem Perfil" />
            <UserRank Rank={4}></UserRank>
            <Typography type="bigTitle">
              {profile.name} - {getAge(profile.dateBirth)}
            </Typography>
            <Typography type="bigTitle" className="ocupation">
              {profile.company || profile.college}
            </Typography>
            <Typography type="textSettings" className="bio-content">
              {profile.bio}
            </Typography>
            <div className="preferences">
              {currentProfile.index % 2 === 0 ? (
                <Preferencias vetorImage={vetorImage} />
              ) : (
                <Preferencias vetorImage={vetorImage2} />
              )}
            </div>
          </RegisterHeader>

          <Typography type="evaluationText">
            {`Conhece ${profile.name}?`}
          </Typography>

          <ContainerCard
            width="100%"
            // height="100%"
            className="container-profile"
            text={`Gostaria de conversar com ${profile.name}?`}
          >
            <div className="btn-container">
              <img src={ThumbDown} alt="Não" onClick={nextProfile}></img>

              <Button
                width="99px"
                height="48px"
                background="#184177"
                borderRadius="10px"
                className="btn btn-font2 btn-text btn-line"
                onClick={() => history.push(`/view-full-profile/${profile.id}`)}
              >
                Ver perfil completo
              </Button>

              <img src={ThumbUp} alt="Sim" onClick={nextProfile}></img>
            </div>
          </ContainerCard>
        </>
      </div>
      <NavBar statusSearch={true} statusHome={false} statusChat={false} />
    </>
  );
}
