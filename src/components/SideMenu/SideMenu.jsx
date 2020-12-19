import React from "react";
import "./SideMenu.scss";
import { NavLink } from "react-router-dom";

export function SideMenu({ src, notif, to, alt }) {

  return (
    <div className="menu">
      <NavLink
        className="menu-item"
        to={to}
        activeClassName="active"
      >
        <img src={src} alt="opção de Notificações" />
        <span className="notification">
          <img src={notif} alt={alt} />
        </span>
      </NavLink>
      <hr className="divisor" />
    </div>
  );
}
