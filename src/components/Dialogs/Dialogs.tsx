import React, { ChangeEvent} from "react";
import s from './Dialogs.module.css'
import { DialogItem } from "./DialogItem/DialogItem";
import { MessageItem } from "./MessageItem/MessageItem";
import { DialogsPageType } from "../../redux/dialogsReducer";





type PropsDialogsType = {
    state: DialogsPageType
    addMessage:()=>void
    updateMessageText:(newMessageText:string) => void
}


export const Dialogs: React.FC<PropsDialogsType> = (props) => {

    const dialogsElements = props.state.dialogs.map(el => <DialogItem id={el.id} name={el.name} />)
    const messagesElements = props.state.messages.map(el => <MessageItem id={el.id} message={el.message} />)


    let addSendChatHandler = () => {
      props.addMessage()
    }


    const onChangeHandlerNewMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateMessageText(e.currentTarget.value)
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


//_______________________________________________________________________________________________________________________
//not store
// type PropsDialogsType = {
//     state: DialogsPageType
//     dispatch: (action: ActionTypeNew) => void
// }


// export const Dialogs: React.FC<PropsDialogsType> = (props) => {

//     const dialogsElements = props.state.dialogs.map(el => <DialogItem id={el.id} name={el.name} />)
//     const messagesElements = props.state.messages.map(el => <MessageItem id={el.id} message={el.message} />)


//     let addSendChatHandler = () => {
//         props.dispatch(addMessageAC())
//     }


//     const onChangeHandlerNewMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
//         props.dispatch(updateMessageAC(e.currentTarget.value))
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
//                 <div>
//                     <textarea value={props.state.newMessageText} onChange={onChangeHandlerNewMessageText}
//                         placeholder={'Enter you message'}></textarea>
//                 </div>
//                 <div><button onClick={addSendChatHandler}>Send</button></div>
//             </div>

//         </div>
//     )
// }