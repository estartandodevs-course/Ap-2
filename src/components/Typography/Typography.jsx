import React from "react";
import "./Typography.scss";

function Typography(props) {
  const { children, type, className } = props;
  let selectClass = `${className} textSettings`;
  let bigTitleClass = `${className} typography-base bigTitle`;

  const TYPES = {
    label: <label className="label">{children}</label>,
    bigTitle: <h1 className={bigTitleClass}> {children}</h1>,
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
