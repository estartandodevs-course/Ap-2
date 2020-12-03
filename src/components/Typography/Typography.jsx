import React from 'react';
import './Typography.scss';

function Typography(props){
    const {children, type} = props;

    const TYPES = {
        label : <label className="label">{children}</label>,
        bigTitle: <h1 className="typography-base bigTitle"> {children}</h1>,
        title : <h1 className="typography-base title"> {children} </h1>,
        smallText: <p className="smallText">{children}</p>
    }
    return (
        TYPES[type]
    )
}

export default Typography;