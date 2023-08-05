import React, { useState } from "react";
import s from './../Dialogs.module.css'

type PropsMessageItemType = {
    id: string
    message: string
}


export const MessageItem: React.FC<PropsMessageItemType> = (props) => {
    return (
        <div className={s.message}>
            {props.message}
            <img
                src="https://avavatar.ru/images/full/30/pYJBXtXlNkcCZLDa.jpg"
                alt=" venom "
            />
        </div>
    )
}





