import { StepHeader } from "../../components/StepHeader/StepHeader";
import step1 from "../../assets/images/step1.png";

export function Home() {
  return (
      <StepHeader content="Sobre você" src={step1} alt="Steps"></StepHeader>
  );
}
