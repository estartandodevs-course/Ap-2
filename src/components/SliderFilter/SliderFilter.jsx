import "./SliderFilter.scss";
import { useState } from "react";
import Typography from "../Typography/Typography";
import arrow from "../../assets/icons/chevron-down.png";

export function SliderFilter() {
  const [slideMin, setSlideMin] = useState({ min: 18 });
  const [slideMax, setSlideMax] = useState({ max: 80 });
  const [isShown, setShowSlider] = useState(false);

  const labelSelect = isShown ? "label" : "not-selected";

  function handleChangeMin(event) {
    setSlideMin({ min: event.target.value });
  }

  function handleChangeMax(event) {
    setSlideMax({ max: event.target.value });
  }

  function onClick() {
    setShowSlider(true);
  }

  return (
    <div className="select-slider" onClick={onClick}>
      <div className="placeholder-slider">
        <Typography type="label">Faixa de Idade:</Typography>
        <Typography
          type="label"
          className={labelSelect}
        >{`${slideMin.min} - ${slideMax.max} anos`}</Typography>
        <img src={arrow} alt="seta"></img>
      </div>

      {isShown ? (
        <>
          <hr></hr>
          <div className="slider-content">
            <label htmlFor="range-1">18</label>
            <input
              type="range"
              className="slider-filter"
              id="range-1"
              min="18"
              max="40"
              value={slideMin.min}
              onChange={handleChangeMin}
            />
            <input
              type="range"
              className="slider-filter"
              id="range-2"
              min="41"
              max="80"
              value={slideMax.max}
              onChange={handleChangeMax}
            />
            <label htmlFor="range-2">80</label>
          </div>
        </>
      ) : null}
    </div>
  );
}
