export type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
    //newMessageText: string
}

export type DialogType = {
    id: string
    name: string
}

export type MessageType = {
    id: string
    message: string
}

// export const updateMessageAC = (newMessageText: string) => {
//     return {
//         type: 'UPDATE-MESSAGE',
//         payload: {
//             newMessageText
//         }
//     } as const
// }



export const addMessageAC = (newMessageText: string) => {
    return {
        type: 'ADD-MESSAGE',
        newMessageText
    } as const
}




export type AddMessageACType = ReturnType<typeof addMessageAC>
// export type UpdateMessageACType = ReturnType<typeof updateMessageAC>
export type ActionTypeDialogs = AddMessageACType  //| clearMessageACType


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

   // newMessageText: ''

}


export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionTypeDialogs):DialogsPageType => {

    switch (action.type) {

        // case "UPDATE-MESSAGE": {
        //     return {...state, newMessageText: action.payload.newMessageText }
        // }

        case 'ADD-MESSAGE': {
            const newMessage = { id: '7', message: action.newMessageText}
            return {...state, messages: [...state.messages, newMessage], };
        }

        // case 'CLEAR-NEWMESSAGETEXT': {
        //     return{...state,newMessageText:''}
        // }

        default: {
            return state
        }
    }
}