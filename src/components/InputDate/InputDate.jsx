import React from 'react';
import './InputDate.scss';

export function InputDate(){
    return (
        <div className="content-date">
            <label className="label" required>Data de Nascimento:</label>
            <input className="date" type="Date" />
        </div>
    )
}