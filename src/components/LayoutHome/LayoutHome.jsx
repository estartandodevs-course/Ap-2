import ImagemPerfilMenor from "../../components/ImagemPerfilMenor/ImagemPerfilMenor";
import { Button } from "../../components/Button/Button";
import Typography from "../Typography/Typography";
import "./LayoutHome.scss";
import { NavBar } from "./NavBar";
import { Notifications } from "../../components/LayoutHome/Notifications/Notifications";
import { Settings } from "../../components/LayoutHome/Settings/Settings";
import { Calendar } from "../../components/LayoutHome/Calendar/Calendar";
import { Matches } from "../../components/LayoutHome/Matches/Matches";
import { Switch, Route, Link } from "react-router-dom";

const SideBar = () => (
  <aside>
    <Link to="/notifications">Notif</Link>
    <Link to="/calendar">calendar</Link>
    <Link to="/matches">matches</Link>
    <Link to="/settings">config</Link>
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

const Routes = () => (
  <Switch>
    <Route path="/notifications" component={Notifications} />
    <Route path="/calendar" component={Calendar} />
    <Route path="/matches" component={Matches} />
    <Route path="/settings" component={Settings} />
  </Switch>
);

export const LayoutHome = ({ onClick }) => (
  <div className="layout-container">
    <div className="layout-content">
      <div className="layout-header-content">
        <Header onClick={onClick} />
        <Routes />
      </div>
      <SideBar />
    </div>
    <NavBar />
  </div>
);
