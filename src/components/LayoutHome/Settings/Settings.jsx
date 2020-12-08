import Typography from "../../Typography/Typography";
import "./Settings.scss";
import account from "../../../assets/icons/account_circle_24px.png";
import help from "../../../assets/icons/help_outline_24px.png";
import notification from "../../../assets/icons/Icon-notificações.png";
import about from "../../../assets/icons/info_24px.png";
import privacy from "../../../assets/icons/lock_24px 2.png";
import location from "../../../assets/icons/room_24px.png";

export const Settings = () => (
  <div className="settings">
    <Typography type="title">Configurações</Typography>
    <div className="settings-content">
      <Typography type="textSettings">
        <img src={account} />
        Conta
      </Typography>
      <Typography type="textSettings">
        <img src={notification} />
        Notificações
      </Typography>
      <Typography type="textSettings">
        <img src={privacy} />
        Privacidade
      </Typography>
      <Typography type="textSettings">
        <img src={location} />
        Localização
      </Typography>
      <Typography type="textSettings">
        <img src={help} />
        Ajuda
      </Typography>
      <Typography type="textSettings">
        <img src={about} />
        Sobre
      </Typography>
    </div>
  </div>
);
