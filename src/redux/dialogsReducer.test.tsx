import { addMessageAC, dialogsReducer} from "./dialogsReducer"
import { DialogsPageType } from "./store"



test ('add message', ()=> {

    // data
    
    let stateDialogsPage: DialogsPageType = {
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

    //change data

    let changeStateDialogsPage = dialogsReducer(stateDialogsPage, addMessageAC('Yakuza Fight Club') )

    //expect data
    expect(changeStateDialogsPage.messages[6].message).toBe('Yakuza Fight Club')

})

