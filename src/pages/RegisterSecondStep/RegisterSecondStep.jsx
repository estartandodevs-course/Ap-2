import React from 'react';
import { Slider } from '../../components/Slider/Slider.jsx';
export function RegisterSecondStep() {
    return (
        <div>
            <Slider RangeMin={-3} RangeMax={3}></Slider>
        </div>
    )
}