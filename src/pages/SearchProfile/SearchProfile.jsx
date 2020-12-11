import React from "react";
import { Button } from "../../components/Button/Button";
import UserRank from "../../components/ClassificaçaoUser/UserRank.jsx";
export function SearchProfile() {
  return (
    <div>
      <Button
        width="185px"
        background="#2767BC"
        height="32px"
        borderRadius="10px"
        className="btn btn-font1 btn-text"
      >
        Mostrar todos perfis
      </Button>
      <UserRank Rank={4}></UserRank>
    </div>
  );
}
