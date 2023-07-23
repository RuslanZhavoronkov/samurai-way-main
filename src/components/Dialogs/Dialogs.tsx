import React from "react";
import s from './Dialogs.module.css'
import { NavLink } from "react-router-dom";



type PropsDialogType = {
    name: string
    id: string

}

type PropsMessageItemType = {
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
    return (
        // Две колонки значит две дивки
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={'Dimych'} id={'1'} />
                <DialogItem name={'Andrew'} id={'2'} />
                <DialogItem name={'Sveta'} id={'3'} />
                <DialogItem name={'Sasha'} id={'4'} />
                <DialogItem name={'Victor'} id={'5'} />
                <DialogItem name={'Valera'} id={'6'} />
            </div>
            <div className={s.messages}>
                <MessageItem message={"Hi"} />
                <MessageItem message={"How is your it-kamasutra ?"} />
                <MessageItem message={"Yo"} />
                <MessageItem message={"Yo"} />
                <MessageItem message={"Yo"} />
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