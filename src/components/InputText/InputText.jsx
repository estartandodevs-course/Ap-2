import React, { useState } from 'react';
import './InputText.scss';

export function InputText({ label, isRequired, colorLabel, colorInput}) {

    const [value, setValue] = useState("");
    const [focused, setFocused ] = useState(false);

    function onChange(event){
        setValue(event.target.value);
    }
    
    const isInputDown = value || focused;

    const inputClass = isInputDown ? "input focus" : "input"
        return (
                <div className="input-text">
                <input style={{ borderColor: colorInput, borderWidth: "1px", color: "rgba(255,255,255,1)"}} onChange={onChange} value={value} onBlur={() => setFocused(false)} onFocus={() => setFocused(true)} className={inputClass} type="text" required={isRequired} />
                    <label style={{ color: colorLabel }} className="label">{label}:</label>
                </div>
        )
}