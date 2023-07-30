import React, { useState } from "react";
import s from './../Dialogs.module.css'
import { NavLink } from "react-router-dom";
import { PropsDialogType } from "../../..";





export const DialogItem: React.FC<PropsDialogType> = (props) => {

    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={`/dialogs/${props.id}`} >{props.name}</NavLink>
        </div>
    )
}

