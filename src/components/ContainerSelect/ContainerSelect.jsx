import "./ContainerSelect.scss";
import { SelectOptions } from "../SelectOptions/SelectOptions";

export function ContainerSelect() {
  const options = [
    { value: 0, label: "Feminino" },
    { value: 1, label: "Masculino" },
    { value: 2, label: "Mulher Trans" },
    { value: 3, label: "Homem Trans" },
    { value: 4, label: "Não Binário" },
    { value: 5, label: "Agênero" },
    { value: 6, label: "Não quero identificar" },
  ];

  return (
    <div className="components-container">
      <SelectOptions options={options} content="Gênero:"></SelectOptions>
    </div>
  );
}
