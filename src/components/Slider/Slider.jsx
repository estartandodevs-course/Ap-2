import './Slider.scss';
import { useState } from 'react';

export function Slider(props) {
    const { RangeMin, RangeMax } = props;
    const { rangeValue } = useState(0);

    return (
        <input type="range" min={RangeMin} max={RangeMax} value={rangeValue} class="slider">
        </input>
    )

}