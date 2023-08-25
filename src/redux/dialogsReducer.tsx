import { DialogsPageType } from "./store"



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


const initialState = {
    dialogs: [
        { id: '1', name: 'Dimych' },
        { id: '2', name: 'Andrew' },
        { id: '3', name: 'Sveta' },
        { id: '4', name: 'Sasha' },
        { id: '5', name: 'Victor' },
        { id: '6', name: 'Valera' },
    ],
    messages: [
        { id: '1', message: 'Hi' },
        { id: '2', message: 'How is your it-kamasutra ?' },
        { id: '3', message: 'Yo' },
        { id: '4', message: 'Yo' },
        { id: '5', message: 'Yo' },
        { id: '6', message: 'Yo' },
    ],

    newMessageText: ''

}


export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionTypeDialogs):DialogsPageType => {
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