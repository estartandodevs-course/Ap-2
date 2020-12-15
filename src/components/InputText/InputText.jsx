import React, { useState } from "react";
import "./InputText.scss";

export function InputText({
  label,
  isRequired,
  colorLabel,
  colorInput,
  className,
  classInput,
  marginBottom,
  width,
  type,
  value,
  setValue,
}) {
  const [value2, setValue2] = useState("");
  const [focused, setFocused] = useState(false);

  function onChange(event) {
    setValue2(event.target.value);
  }

  const isInputDown = value2 || focused;

  const HasClassName = className != null ? "input input-bio" : "input";
  const inputClass = isInputDown ? `${HasClassName} focus` : `${HasClassName}`;
  return (
    <div
      className={`${classInput} input-text`}
      style={{ marginBottom: marginBottom }}
    >
      <input
        type={ type }
        maxLength="250"
        style={{
          borderColor: colorInput,
          borderWidth: "1px",
          color: "rgba(255,255,255,1)",
          width: width,
        }}
        onChange={onChange}
        value={value2}
        onBlur={() => setFocused(false)}
        onFocus={() => setFocused(true)}
        className={inputClass}
        required={isRequired}
      />

      <label
        style={{
          color: colorLabel,
        }}
        className="label"
      >
        {label}:
      </label>
    </div>
  );
}