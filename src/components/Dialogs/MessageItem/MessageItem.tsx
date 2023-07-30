import React, { useState } from "react";
import s from './../Dialogs.module.css'
import { PropsMessageItemType } from "../../..";



export const MessageItem: React.FC<PropsMessageItemType> = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}





