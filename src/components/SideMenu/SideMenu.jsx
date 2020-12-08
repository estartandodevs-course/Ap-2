import React, { useState } from "react";
import "./SideMenu.scss";
import { NavLink } from "react-router-dom";

export function SideMenu({ src, notif, to }) {
  const [isClicked, setIsClicked] = useState(false);

  let classN = isClicked === true ? "menu-item active" : "menu-item";

  return (
    <div className="menu">
      <NavLink
        onClick={() => {
          setIsClicked(true);
        }}
        className="menu-item"
        to={to}
        activeClassName="active"
      >
        <img src={src} alt="opção de Notificações" />
        <span className="notification">
          <img src={notif} alt="notificação" />
        </span>
      </NavLink>
      <hr className="divisor" />
    </div>
  );
}
