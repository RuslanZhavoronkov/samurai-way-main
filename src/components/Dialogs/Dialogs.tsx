import React, { ChangeEvent } from "react";
import s from './Dialogs.module.css'
import { DialogItem } from "./DialogItem/DialogItem";
import { MessageItem } from "./MessageItem/MessageItem";
import { DialogsPageType } from "../../redux/dialogsReducer";
import { Redirect } from "react-router-dom";
import { Field, InjectedFormProps, reduxForm } from "redux-form";





type PropsDialogsType = {
    state: DialogsPageType
    addMessage: (newMessageText: string) => void
    // updateMessageText: (newMessageText: string) => void
    // isAuth: boolean
}


export const Dialogs: React.FC<PropsDialogsType> = (props) => {

    const dialogsElements = props.state.dialogs.map(el => <DialogItem id={el.id} name={el.name} key={el.id} />)
    const messagesElements = props.state.messages.map(el => <MessageItem id={el.id} message={el.message} key={el.id} />)

    const onSubmit = (formData: FormDataDialogMessageType) => {
        props.addMessage(formData.newMessageText)
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

                <AddMessageReduxForm onSubmit={onSubmit}/>


            </div>

        </div>
    )
}

export type FormDataDialogMessageType = {
    newMessageText: string
}

export const AddMessageForm: React.FC<InjectedFormProps<FormDataDialogMessageType>> = (props) => {
    
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field
                        component={'textarea'}
                        name={'newMessageText'}
                        placeholder={'Enter you message'} />
                 
                </div>
                <div>
                    <button>Send</button>
                </div>
            </form>

        </div>

    )
}


export const AddMessageReduxForm = reduxForm<FormDataDialogMessageType>({
    form: 'dialogAddMessageForm'
})(AddMessageForm)

//-----------------------------------------------------------------------------------------------------------------------


// type AddMessageForm = {
//     newMessageText: string
//     updateMessageText: (newMessageText: string) => void
//     addMessage: () => void
// }

// export const AddMessageForm: React.FC<InjectedFormProps<AddMessageForm>> = (props) => {
//     // const onChangeHandlerNewMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
//     //     props.updateMessageText(e.currentTarget.value)
//     // }
//     // const addSendChatHandler = () => {
//     //     props.addMessage()
//     // }
//     return (
//         <div>
//             <form onSubmit={props.handleSubmit}>
//                 <div>
//                     <Field
//                         component={'textarea'}
//                         name={'newMessageText'}
//                         placeholder={'Enter you message'} />
                 
//                 </div>
//                 <div>
//                     <button onClick={addSendChatHandler}>Send</button>
//                 </div>
//             </form>

//         </div>

//     )
// }


{/* <AddMessageForm
newMessageText={props.state.newMessageText}
/>


</div> */}
