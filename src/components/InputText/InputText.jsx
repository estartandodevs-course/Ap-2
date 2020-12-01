import React, { useState } from 'react';
import './InputText.scss';

export function InputText({ label, isRequired, colorLabel, colorInput, className}) {

    const [value, setValue] = useState("");
    const [focused, setFocused ] = useState(false);

    function onChange(event){
        setValue(event.target.value);
    }
    
    const isInputDown = value || focused;
    
    const HasClassName = className != null ? "input input-bio" : "input";
    const inputClass = isInputDown ? `${HasClassName} focus` : `${HasClassName}`;
        return (
                <div className="input-text">
                    <input 
                        type="text"
                        maxlength="250" 
                        style={{
                            borderColor: colorInput,
                            borderWidth: "1px",
                            color: "rgba(255,255,255,1)"
                            }} 
                        onChange={onChange}
                        value={value}
                        onBlur={() => setFocused(false)}
                        onFocus={() => setFocused(true)}
                        className={inputClass}
                        required={isRequired}
                    />
                    
                    <label
                        style={{
                            color: colorLabel 
                        }}
                        className="label">{label}:</label>
                </div>
        )
}