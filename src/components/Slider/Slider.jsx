import './Slider.scss';
import { useState } from 'react';

export function Slider(props) {
    const { RangeMin, RangeMax, readOnly } = props;
    const { rangeValue } = useState(0);

    return (
        <input type="range" min={RangeMin} max={RangeMax} value={rangeValue} className="slider" readOnly={readOnly} draggable="false">
        </input>
    )

}