import ContainerCard from "../../ContainerCard/containerCard";
import imgContainerAgenda1 from "../../../assets/icons/IconeAgenda1.svg";
import imgContainerAgenda2 from "../../../assets/icons/IconeAgenda2.svg";
import Typography from "../../Typography/Typography";
import "./Calendar.scss";

export const Calendar = () => (
  <div className="calendar">
    <Typography type="title">Agenda</Typography>
    <ContainerCard
      image={imgContainerAgenda1}
      text="Encontro com Maria!"
      className="containerAgenda"
    />
    <ContainerCard
      image={imgContainerAgenda2}
      text="Encontro com Julia!"
      className="containerAgenda"
    />
  </div>
);
