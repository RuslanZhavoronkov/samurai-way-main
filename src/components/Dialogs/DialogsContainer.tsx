import React, { ChangeEvent, ChangeEventHandler, useRef } from "react";
import s from './Dialogs.module.css'
import { DialogItem } from "./DialogItem/DialogItem";
import { MessageItem } from "./MessageItem/MessageItem";
import { ActionTypeNew, DialogType, DialogsPageType, MessageType} from "../../redux/store";
import { addMessageAC, updateMessageAC } from "../../redux/dialogsReducer";
import { store } from "../../redux/redux-store";
import { Dialogs } from "./Dialogs";






export const DialogsContainer = () => {

   
     const state = store.getState()

    let addMessage = () => {
       store.dispatch(addMessageAC())
    }


    const updateMessageText = (newMessageText:string) => {
          store.dispatch(updateMessageAC(newMessageText))
    }

    return (
        // Две колонки значит две дивки
        <Dialogs 
        state={state.dialogsPage}
        addMessage={addMessage} 
        updateMessageText = {updateMessageText} 
        />
    )
}

//-----------------------------------------------------------------------------------------------------------------------


// type PropsDialogsType = {
//     state: DialogsPageType
// }

// export const Dialogs: React.FC<PropsDialogsType> = (props) => {

//     const dialogsElements = props.state.dialogs.map(el => <DialogItem id={el.id} name={el.name} />)
//     const messagesElements = props.state.messages.map(el => <MessageItem id={el.id} message={el.message} />)

//     let textAreaChat = useRef<HTMLTextAreaElement>(null)

//     let addSendChatHandler = () => {
//         let newTextChat = textAreaChat.current as HTMLTextAreaElement
//         alert(newTextChat.value)
//     }

//     return (
//         // Две колонки значит две дивки
//         <div className={s.dialogs}>
//             <div className={s.dialogsItems}>
//                 {dialogsElements}
//             </div>
//             <div className={s.messages}>
//                 {messagesElements}
//             </div>
//             <div className={s.chat}>
//                 <div><textarea ref={textAreaChat}></textarea></div>
//                 <div><button onClick={addSendChatHandler}>Send</button></div>
//             </div>

//         </div>
//     )
// }



