import React from "react";
import s from './Dialogs.module.css'
import { DialogItem} from "./DialogItem/DialogItem";
import { MessageItem} from "./MessageItem/MessageItem";
import { PropsDialogType, PropsMessageItemType } from "../..";


type PropsDialogsComponentType = {
    dialogs: PropsDialogType[],
    messages: PropsMessageItemType[]
}

export const Dialogs:React.FC<PropsDialogsComponentType> = (props) => {
   
    const dialogsElements = props.dialogs.map(el => <DialogItem id={el.id} name={el.name} />)
    const messagesElements = props.messages.map(el => <MessageItem id={el.id} message={el.message} />)

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

