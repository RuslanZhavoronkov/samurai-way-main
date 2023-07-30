import React, { useState } from "react";
import s from './Dialogs.module.css'
import { NavLink } from "react-router-dom";



type PropsDialogType = {
    id: string
    name: string
}

type PropsMessageItemType = {
    id: string
    message: string
}



const DialogItem: React.FC<PropsDialogType> = (props) => {

    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={`/dialogs/${props.id}`} >{props.name}</NavLink>
        </div>
    )
}

const MessageItem: React.FC<PropsMessageItemType> = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}



export const Dialogs = () => {
    const [dialogs, setDialogs] = useState<PropsDialogType[]>([
        { id: '1', name: 'Dimych' },
        { id: '2', name: 'Andrew' },
        { id: '3', name: 'Sveta' },
        { id: '4', name: 'Sasha' },
        { id: '5', name: 'Victor' },
        { id: '6', name: 'Valera' },

    ])

    const [messages, setMessages] = useState<PropsMessageItemType[]>([
        { id: '1', message: 'Hi' },
        { id: '2', message: 'How is your it-kamasutra ?' },
        { id: '3', message: 'Yo' },
        { id: '4', message: 'Yo' },
        { id: '5', message: 'Yo' },
        { id: '6', message: 'Yo' },

    ])

    const dialogsElements = dialogs.map(el => <DialogItem id={el.id} name={el.name} />)
    const messagesElements = messages.map(el => <MessageItem id={el.id} message={el.message} />)

    return (
        // Две колонки значит две дивки
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

