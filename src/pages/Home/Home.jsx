import React from "react";
import BackgroundHome from "../../components/BackgroundHome/BackgroundHome.jsx";

import { useHistory } from "react-router-dom";
import "./Home.scss";
import { LayoutHome } from "../../components/LayoutHome/LayoutHome.jsx";

export function Home() {
  const history = useHistory();

  function onClick() {
    history.push("/");
  }

  return (
    <BackgroundHome>
      <LayoutHome onClick={onClick}>
  
      </LayoutHome>
    </BackgroundHome>
  );
}
