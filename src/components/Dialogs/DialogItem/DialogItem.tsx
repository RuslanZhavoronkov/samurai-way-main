import React, { useState } from "react";
import s from './../Dialogs.module.css'
import { NavLink } from "react-router-dom";


type PropsDialogItemType = {
    id: string
    name: string
}



export const DialogItem: React.FC<PropsDialogItemType> = (props) => {

    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={`/dialogs/${props.id}`} >{props.name}</NavLink>
        </div>
    )
}

