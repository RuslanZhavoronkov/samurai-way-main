
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

}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionTypeDialogs):DialogsPageType => {
    switch (action.type) {
        case 'dialogs/ADD-MESSAGE': {
            const newMessage = { id: '7', message: action.newMessageText}
            return {...state, messages: [...state.messages, newMessage], };
        }
        default: {
            return state
        }
    }
}

//action-creator
export const addMessageAC = (newMessageText: string) => {
    return {
        type: 'dialogs/ADD-MESSAGE',
        newMessageText
    } as const
}

//type
export type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
}

export type DialogType = {
    id: string
    name: string
}

export type MessageType = {
    id: string
    message: string
}

export type AddMessageACType = ReturnType<typeof addMessageAC>
export type ActionTypeDialogs = AddMessageACType  //| clearMessageACType