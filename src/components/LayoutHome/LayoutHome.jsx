import ImagemPerfilMenor from "../../components/ImagemPerfilMenor/ImagemPerfilMenor";
import { Button } from "../../components/Button/Button";
import Typography from "../Typography/Typography";

const STYLES = {
  layout: {
    display: "flex",
    flexDirection: "column",
    background: "white",
    height: "100vh",
  },
  notification: {
    display: "flex",
    flexDirection: "column",
    background: "red",
    height: "100%",
  },
  config: {
    display: "flex",
    flexDirection: "column",
    background: "green",
    height: "100%",
    width: "100%",
  },
  button: {
    width: "136px",
    height: "32px",
    background: "#184177",
    borderRadius: "10px",
  },
};

const NavBar = ({ children }) => <nav>{children}</nav>;

const SideBar = ({ children }) => <aside>{children}</aside>;

const Header = ({ onClick }) => (
  <header>
    <ImagemPerfilMenor />
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
    <hr />
  </header>
);

export const LayoutHome = ({ children, onClick }) => (
  <div>
    <div>
      <div>
        <Header onClick={onClick} />
        {children}
      </div>
      <SideBar />
    </div>
    <NavBar />
  </div>
);

const Notification = () => <div style={STYLES.notification}>Notificações</div>;

const AppConfig = () => (
  <div style={STYLES.config}>
    <hr style={{ borderColor: "black" }} />
    config
  </div>
);
