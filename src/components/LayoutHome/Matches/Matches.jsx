import Typography from "../../Typography/Typography";
import "./Matches.scss";
import imgContainerPic from "../../../assets/images/containerImage.svg";
import ContainerCard from "../../ContainerCard/containerCard";

export const Matches = () => (
  <div className="matches">
    <Typography type="title">Matches</Typography>
    <ContainerCard
      image={imgContainerPic}
      text="Maria"
      className="container-matches"
    />
  </div>
);
