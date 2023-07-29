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
    const[dialogsData, setDialogsData]  = useState<PropsDialogType[]>([
        { id: '1', name: 'Dimych'},
        { id: '2', name: 'Andrew'},
        { id: '3', name: 'Sveta'},
        { id: '4', name: 'Sasha'},
        { id: '5', name: 'Victor'},
        { id: '6', name: 'Valera'},
        
    ])


    const[messagesData, setMessagesData]  = useState<PropsMessageItemType[]>([
        { id: '1', message: 'Hi'},
        { id: '2', message: 'How is your it-kamasutra ?'},
        { id: '3', message: 'Yo'},
        { id: '4', message: 'Yo'},
        { id: '5', message: 'Yo'},
        { id: '6', message: 'Yo'},
        
    ])

    return (
        // Две колонки значит две дивки
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem id={dialogsData[0].id} name={dialogsData[0].name}  />
                <DialogItem id={dialogsData[1].id} name={dialogsData[1].name}  />
                <DialogItem id={dialogsData[2].id} name={dialogsData[2].name}  />
                <DialogItem id={dialogsData[3].id} name={dialogsData[3].name}  />
                <DialogItem id={dialogsData[4].id} name={dialogsData[4].name}  />
                <DialogItem id={dialogsData[5].id} name={dialogsData[5].name}  />
            </div>
            <div className={s.messages}>
                <MessageItem id={messagesData[0].id} message={messagesData[0].message} />
                <MessageItem id={messagesData[1].id} message={messagesData[1].message} />
                <MessageItem id={messagesData[2].id} message={messagesData[2].message} />
                <MessageItem id={messagesData[3].id} message={messagesData[3].message} />
                <MessageItem id={messagesData[4].id} message={messagesData[4].message} />
                <MessageItem id={messagesData[5].id} message={messagesData[4].message} />
            </div>
        </div>
    )
}

//-----------------------------------------------------------------------------------------------------------------------------

{/* <div className={`${s.dialog} ${s.active}`}>
<NavLink to={'/dialogs/1'} >Dimych</NavLink>
</div>
<div className={s.dialog}>
<NavLink to={'/dialogs/2'}>Andrew</NavLink>
</div>
<div className={s.dialog}>
<NavLink to={'/dialogs/3'}>Sveta</NavLink>
</div>
<div className={s.dialog}>
<NavLink to={'/dialogs/4'}>Sasha</NavLink>
</div>
<div className={s.dialog}>
<NavLink to={'/dialogs/5'}>Victor</NavLink>
</div>
<div className={s.dialog}>
<NavLink to={'/dialogs/6'}>Valera</NavLink>
</div>



                <div className={s.message}>Hi</div>
                <div className={s.message}>How is your it-kamasutra</div>
                <div className={s.message}>Yo</div>




*/}