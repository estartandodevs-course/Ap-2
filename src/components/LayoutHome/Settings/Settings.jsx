import Typography from "../../Typography/Typography";
import "./Settings.scss";
import account from "../../../assets/icons/account_circle_24px.png";
import help from "../../../assets/icons/help_outline_24px.png";
import notification from "../../../assets/icons/Icon-notificações.png";
import about from "../../../assets/icons/info_24px.png";
import privacy from "../../../assets/icons/lock_24px 2.png";
import logoutIcon from "../../../assets/icons/logout.svg";
import { logout } from "../../../services/auth";
import { useHistory } from "react-router-dom";

export const Settings = () => {
  const history = useHistory();

  function logoutRedirect() {
    logout();
    history.push("/login");
  }

  return (
    <div className="settings">
      <Typography type="title">Configurações</Typography>
      <div className="settings-content">
        <Typography type="textSettings">
          <img src={account} alt="Conta" />
          Conta
        </Typography>
        <Typography type="textSettings">
          <img src={notification} alt="Notificações" />
          Notificações
        </Typography>
        <Typography type="textSettings">
          <img src={privacy} alt="Privacidade" />
          Privacidade
        </Typography>

        <span onClick={logoutRedirect}>
          <Typography type="textSettings">
            <img src={logoutIcon} alt="Sair" />
            Sair
          </Typography>
        </span>
        <Typography type="textSettings">
          <img src={help} alt="Ajuda" />
          Ajuda
        </Typography>
        <Typography type="textSettings">
          <img src={about} alt="Sobre" />
          Sobre
        </Typography>
      </div>
    </div>
  );
};
