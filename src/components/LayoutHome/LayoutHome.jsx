import ImagemPerfilMenor from "../../components/ImagemPerfilMenor/ImagemPerfilMenor";
import { Button } from "../../components/Button/Button";
import Typography from "../Typography/Typography";
import "./LayoutHome.scss";
import { Notifications } from "../../components/LayoutHome/Notifications/Notifications";
import { Settings } from "../../components/LayoutHome/Settings/Settings";
import { Calendar } from "../../components/LayoutHome/Calendar/Calendar";
import { Matches } from "../../components/LayoutHome/Matches/Matches";
import { Switch, Route } from "react-router-dom";
import { SideMenu } from "../../components/SideMenu/SideMenu.jsx";
import iconNotif from "../../assets/icons/icon-notificações.svg";
import iconMatches from "../../assets/icons/icon-matches.svg";
import iconCalendar from "../../assets/icons/icon-calendar.svg";
import iconConfig from "../../assets/icons/icon-config.svg";
import Notif from "../../assets/icons/Notificação.svg";

const SideBar = () => (
  <aside className="side-menu">
    <SideMenu src={iconNotif} notif={Notif} to="/notifications" />
    <SideMenu src={iconCalendar} notif={Notif} to="/calendar" />
    <SideMenu src={iconMatches} notif={Notif} to="/matches" />
    <SideMenu src={iconConfig} notif={Notif} to="/settings" />
  </aside>
);

const Header = ({ onClick }) => (
  <header>
    <div className="header">
      <ImagemPerfilMenor />
      <div className="header-components">
        <Typography type="bigTitle">Isabel Vieira</Typography>
        <Button
          width="136px"
          background="#184177"
          height="32px"
          borderRadius="10px"
          className="btn btn-profile btn-font1 btn-text"
          onClick={onClick}
        >
          Editar Perfil
        </Button>
      </div>
    </div>
    <hr />
  </header>
);

const Routes = () => {
  return (
    <Switch>
      <Route path="/notifications" component={Notifications} />
      <Route path="/calendar" component={Calendar} />
      <Route path="/matches" component={Matches} />
      <Route path="/settings" component={Settings} />
    </Switch>
  );
};

export const LayoutHome = ({ onClick }) => (
    <div className="layout-container">
      <div className="layout-content">
        <div className="layout-header-content">
          <Header onClick={onClick} />
          <Routes />
        </div>
        <SideBar />
      </div>
    </div>
);
