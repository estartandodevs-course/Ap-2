import React from "react";
import "./Typography.scss";

function Typography(props) {
  const { children, type, className } = props;
  let selectClass = `${className} textSettings`;
  let bigTitleClass = `${className} typography-base bigTitle`;
  let labelClass = `${className} label`;

  const TYPES = {
    label: <label className={labelClass}>{children}</label>,
    bigTitle: <h1 className={bigTitleClass}> {children}</h1>,
    bigLabel : <label className="bigLabel">{children}</label> ,
    title: <h1 className="typography-base title"> {children} </h1>,
    smallText: <p className="smallText">{children}</p>,
    textSettings: <p className={selectClass}>{children}</p>,
    evaluationText: (
      <span className="evaluationText">
        {children} <a href="/">Avalie!</a>
      </span>
    ),
  };
  return TYPES[type];
}

export default Typography;
