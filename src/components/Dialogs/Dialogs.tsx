import React, { useRef } from "react";
import s from './Dialogs.module.css'
import { DialogItem } from "./DialogItem/DialogItem";
import { MessageItem } from "./MessageItem/MessageItem";
import { DialogType, DialogsPageType, MessageType } from "../../redux/state";



type PropsDialogsType = {
    state: DialogsPageType
}

export const Dialogs: React.FC<PropsDialogsType> = (props) => {

    const dialogsElements = props.state.dialogs.map(el => <DialogItem id={el.id} name={el.name} />)
    const messagesElements = props.state.messages.map(el => <MessageItem id={el.id} message={el.message} />)

    let textAreaChat = useRef<HTMLTextAreaElement>(null)

    let addSendChatHandler = () => {
        let newTextChat = textAreaChat.current as HTMLTextAreaElement
        alert(newTextChat.value)
    }

    return (
        // Две колонки значит две дивки
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.chat}>
                <div><textarea ref={textAreaChat}></textarea></div>
                <div><button onClick={addSendChatHandler}>Send</button></div>
            </div>

        </div>
    )
}

