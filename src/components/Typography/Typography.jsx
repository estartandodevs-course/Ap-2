import React from 'react';
import './Typography.scss';

function Typography(props){
    const {children, type} = props;

    const TYPES = {
        label : <label className="label">{children}</label>,
        bigLabel: <span className="bigLabel">{children}</span>,
        bigTitle: <h1 className="typography-base bigTitle"> {children}</h1>,
        title : <h1 className="typography-base title"> {children} </h1>,
        smallText: <p className="smallText">{children}</p>,
        textSettings: <p className="textSettings">{children}</p>,
        evaluationText: <span className="evaluationText" >{children} <a href="/">Avalie!</a></span>
    }
    return (
        TYPES[type]
    )
}

export default Typography;
