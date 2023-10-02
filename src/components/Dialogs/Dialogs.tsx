import React, { ChangeEvent} from "react";
import s from './Dialogs.module.css'
import { DialogItem } from "./DialogItem/DialogItem";
import { MessageItem } from "./MessageItem/MessageItem";
import { DialogsPageType } from "../../redux/dialogsReducer";
import { Redirect } from "react-router-dom";





type PropsDialogsType = {
    state: DialogsPageType
    addMessage:()=>void
    updateMessageText:(newMessageText:string) => void
   // isAuth: boolean
}


export const Dialogs: React.FC<PropsDialogsType> = (props) => {

    const dialogsElements = props.state.dialogs.map(el => <DialogItem id={el.id} name={el.name} key={el.id}/>)
    const messagesElements = props.state.messages.map(el => <MessageItem id={el.id} message={el.message} key = {el.id}/>)


    let addSendChatHandler = () => {
      props.addMessage()
    //  props.clearMessageText()
    }


    const onChangeHandlerNewMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateMessageText(e.currentTarget.value)
    }

    // if (!props.isAuth){
    //     return <Redirect to = {'/login'}/>
    // } 

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
                <div>
                    <textarea value={props.state.newMessageText} onChange={onChangeHandlerNewMessageText}
                        placeholder={'Enter you message'}></textarea>
                </div>
                <div><button onClick={addSendChatHandler}>Send</button></div>
            </div>

        </div>
    )
}

//-----------------------------------------------------------------------------------------------------------------------


