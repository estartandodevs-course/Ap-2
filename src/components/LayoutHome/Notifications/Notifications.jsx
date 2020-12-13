import "./Notifications.scss";
import Typography from "../../Typography/Typography";
import imgContainerPic from "../../../assets/images/containerImage.svg";
import ContainerCard from "../../ContainerCard/containerCard";

export const Notifications = () => (
  <div className="notifications">
    <Typography type="title">Notificações</Typography>
    <ContainerCard
      image={imgContainerPic}
      text="Maria também gostaria de conversar com você"
      className="containerNotificacao"
    />
    <ContainerCard
      image={imgContainerPic}
      text="Maria também gostaria de conversar com você"
      className="containerNotificacao"
    />
    <ContainerCard
      image={imgContainerPic}
      text="Maria também gostaria de conversar com você"
      className="containerNotificacao"
    />
  </div>
);
