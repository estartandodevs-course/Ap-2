import './Slider.scss';
import { useState } from 'react';

export function Slider(props) {
    const { RangeMin, RangeMax, disabled } = props;
    const { rangeValue } = useState(0);

    return (
        <input type="range" min={RangeMin} max={RangeMax} value={rangeValue} className="slider" disabled={disabled}>
        </input>
    )

}