import React, { useState } from 'react';
import './SideMenu.scss';
import { Link } from 'react-router-dom';

export function SideMenu({ src, notif}){
    
    const [isClicked,setIsClicked] = useState(false);

    let classN = isClicked  === true ? "menu-item active"  : "menu-item"

    return(
        <div className="menu">
            <Link
                onClick={()=>{setIsClicked(true)}}
                onBlur={()=>{setIsClicked(false)}}
                className={classN} >
                <img
                    src={src}
                    alt="opção de Notificações" />
                <span className="notification">
                    <img src={notif} alt="notificação" />
                </span>
            </Link>
            <hr className="divisor"/>
        </div>
    ) 
}
