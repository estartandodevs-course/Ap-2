import React from 'react';
import { NavBar } from '../../components/LayoutHome/NavBar/NavBar';

export function Chat(){
    return (
        <NavBar statusSearch={false} statusHome={false} statusChat={true} />
    )
}