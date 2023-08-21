import { DialogsPageType } from "./state"



export const updateMessageAC = (newMessageText: string) => {
    return {
        type: 'UPDATE-MESSAGE',
        payload: {
            newMessageText
        }
    } as const
}



export const addMessageAC = () => {
    return {
        type: 'ADD-MESSAGE'
    } as const
}



export type AddMessageACType = ReturnType<typeof addMessageAC>
export type UpdateMessageACType = ReturnType<typeof updateMessageAC>
export type ActionTypeDialogs = AddMessageACType | UpdateMessageACType


export const dialogsReducer = (state: DialogsPageType, action: ActionTypeDialogs):DialogsPageType => {
    switch (action.type) {

        case "UPDATE-MESSAGE": {
            state.newMessageText = action.payload.newMessageText
            return state
        }

        case 'ADD-MESSAGE': {
            const newMessage = { id: '7', message: state.newMessageText}
            state.messages.push(newMessage)
            state.newMessageText = '' //стираем в поле введенное значение
            return state;
        }

        default: {
            return state
        }
    }
}