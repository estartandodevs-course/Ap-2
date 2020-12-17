import "./SelectOptions.scss";
import Select, { components } from "react-select";
import React, { useState } from "react";

export function SelectOptions(props) {
  const { content, options = [], setValue} = props;
  const [isSelected, setSelected] = useState(false);
  const [isShown, setShowOption] = useState(false);

  const customStyles = {
    container: (base) => ({
      ...base,
      fontFamily: "Inter",
    }),
    control: (base, state) => ({
      ...base,
      width: "100%",
      height: "100%",
      minHeight: "40px",
      borderRadius: "5px",
      fontSize: "14px",
      lineHeight: "21px",
      letterSpacing: "0.02em",
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
      border: 0,
      backgroundColor: state.isSelected
        ? "#f8f8f8"
        : "linearGradient(180deg, #87e4c7 3.05%, #5cacc2 77.55%)",
    }),
    menu: (base) => ({
      ...base,
      borderRadius: "5px",
      textAlign: "center",
    }),
    menuList: (base) => ({
      ...base,
      maxHeight: "207px",
      color: "#999999",
      fontWeight: 1,
    }),
    valueContainer: (base) => ({
      ...base,
      justifyContent: "center",
      cursor: "pointer",
    }),
    singleValue: (base) => ({
      ...base,
      color: isSelected ? "#FBFBFB" : "#999999",
    }),
    indicatorsContainer: (base) => ({
      ...base,
      display: "none",
    }),
    indicatorSeparator: (base) => ({
      ...base,
      display: "none",
    }),
  };

  const Option = (props) => {
    return <components.Option {...props}>{props.children}</components.Option>;
  };

  function onChange(event) {
    setSelected(true);
    setValue(event.value);
  }

  function onClick() {
    setShowOption(true);
  }

  const selectClass = isSelected ? "select-component" : "option-list";

  return (
    <div className="select-container">
      <div className="placeholder" onClick={onClick}>
        <span>{content}</span>
      </div>
      {isShown ? (
        <Select
          options={options}
          className={selectClass}
          onChange={onChange}
          components={{ Option }}
          styles={customStyles}
          classNamePrefix="select"
          // defaultValue={options[0]}
          placeholder="Selecione"
         // value={value}

        />
      ) : null}
    </div>
  );
}
