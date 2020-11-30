import React from 'react';
import './InputDate.scss';

export function InputDate(){
    return (
        <div class="wrapper">
            <label class="label" required>Data de Nascimento:</label>
            <input class="date" type="Date" />
        </div>
    )
}