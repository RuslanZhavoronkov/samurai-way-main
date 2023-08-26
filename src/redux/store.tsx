import { ActionTypeDialogs, AddMessageACType, UpdateMessageACType, dialogsReducer} from "./dialogsReducer"
import { ActionTypeProfile, AddPostACType, UpdatePostACType, profileReducer} from "./profileReducer"



export type PostType = {
    id: string,
    message: string
    likesCount: string
}

export type ProfilePageType = {
    posts: PostType[],
    newPostText: string

}

export type DialogType = {
    id: string
    name: string
}

export type MessageType = {
    id: string
    message: string
}

export type FriendType = {
    id: string
    name: string
}




export type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessageText: string
}


export type sideBarType = {
    friends: FriendType[]
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sideBar: sideBarType
}

type storeType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: (value: StateType) => void
    subscribe: (callBack: (value: StateType) => void) => void
    dispatch: (action: ActionTypeNew) => void

}








export type ActionTypeNew = AddPostACType | UpdatePostACType |  AddMessageACType | UpdateMessageACType




export let store: storeType = {

    _state: {
        profilePage: {
            posts: [
                { id: '1', message: 'Hi, how are you ?', likesCount: '12 ' },
                { id: '2', message: 'It\s my first post', likesCount: ' 11' },
            ],
            newPostText: 'it-kamasutra.com'

        },

        dialogsPage: {
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

        },

        sideBar: {
            friends: [
                { id: '1', name: 'Dimych' },
                { id: '2', name: 'Igor' },
                { id: '3', name: 'Victor' }
            ]
        }
    },

    _callSubscriber(value: StateType) {
        console.log('state changed');
    },


    getState() {
        return this._state
    },

    subscribe(callBack: (value: StateType) => void) {
        this._callSubscriber = callBack // в index.tsx вызывается store.subscribe(renderTree(функция перерисовки)) и 
        //присваиваем свойству __callSubscriber функцию renderTree(функция перерисовки)
    },

    dispatch(action: ActionTypeNew) {         //{type: ''}
        
        this._state.profilePage = profileReducer(this._state.profilePage, action as ActionTypeProfile)//вернуть измененный state
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action as ActionTypeDialogs)

        this._callSubscriber(this._state)
    }

}


//-------------------------------------------------------------------------------------------------------------------------------------------------



















//___________________________________________________________________________________________________________________________

// export let state: StateType = {

//     profilePage: {
//         posts: [
//             { id: '1', message: 'Hi, how are you ?', likesCount: '12 ' },
//             { id: '2', message: 'It\s my first post', likesCount: ' 11' },
//         ],
//         newPostText: 'it-kamasutra.com'

//     },

//     dialogsPage: {
//         dialogs: [
//             { id: '1', name: 'Dimych' },
//             { id: '2', name: 'Andrew' },
//             { id: '3', name: 'Sveta' },
//             { id: '4', name: 'Sasha' },
//             { id: '5', name: 'Victor' },
//             { id: '6', name: 'Valera' },
//         ],
//         messages: [
//             { id: '1', message: 'Hi' },
//             { id: '2', message: 'How is your it-kamasutra ?' },
//             { id: '3', message: 'Yo' },
//             { id: '4', message: 'Yo' },
//             { id: '5', message: 'Yo' },
//             { id: '6', message: 'Yo' },
//         ]

//     },

//     sideBar: {
//         friends: [
//             { id: '1', name: 'Dimych' },
//             { id: '2', name: 'Igor' },
//             { id: '3', name: 'Victor' }
//         ]
//     }
// }


// export const addPost = () => {

//     // console.log(postMessage);
//     const newPost: PostType = { id: '5', message: state.profilePage.newPostText, likesCount: '0' }
//     //{...state, profilePage: {...state.profilePage, post: [...state.profilePage.posts, newPost]}}

//     state.profilePage.posts.push(newPost)
//     state.profilePage.newPostText = ''
//     renderTree(state);
// }


// export const changeNewPostText = (newPostText: string) => {
//     console.log(newPostText)
//     state.profilePage.newPostText = newPostText;
//     renderTree(state);
//     //{...state, profilePage:{...state.profilePage,  newPostText: newPostText}}
// }

// export const subscribe = (callBack: (value: StateType)=> void) => {
//     renderTree = callBack
// }

// addPost() { //1.method change state
    //     const newPost: PostType = { id: '5', message: this._state.profilePage.newPostText, likesCount: '0' }
    //     this._state.profilePage.posts.push(newPost)
    //     this._state.profilePage.newPostText = ''
    //     this._callSubscriber(this._state); //обновление state
    // },

    // changeNewPostText(newPostText: string) { //2.method change state
    //     this._state.profilePage.newPostText = newPostText;
    //     this._callSubscriber(this._state);//обновление state
    // },


    // type storeType = {
    //     _state: StateType
    //     getState: () => StateType
    //     _callSubscriber: (value: StateType) => void
    //     addPost: () => void
    //     changeNewPostText: (newPostText: string) => void
    //     subscribe: (callBack: (value: StateType) => void) => void
    //     dispatch: (action: ActionTypeNew) => void
    
    // }


    //___________________________________________________________________________________________________________________________

    // dispatch(action: ActionTypeNew) {         //{type: ''}
    //     switch (action.type) {
    //         case 'ADD-POST': {
    //             const newPost: PostType = { id: '5', message: this._state.profilePage.newPostText, likesCount: '0' }
    //             this._state.profilePage.posts.push(newPost)
    //             this._state.profilePage.newPostText = '' //стираем в поле введенное значение
    //             this._callSubscriber(this._state);
    //             break;
    //         }

    //         case 'UPDATE-POST': {
    //             this._state.profilePage.newPostText = action.payload.newPost //action.newPostText;
    //             this._callSubscriber(this._state);//обновление state
    //             break;
    //         }

    //         case 'ADD-MESSAGE': {
    //             const newMessage = {id: '7', message: this._state.dialogsPage.newMessageText}
    //             this._state.dialogsPage.messages.push(newMessage)
    //             this._state.dialogsPage.newMessageText = '' //стираем в поле введенное значение
    //             this._callSubscriber(this._state)
    //             break;
    //         }

    //         case "UPDATE-MESSAGE": {
    //             this._state.dialogsPage.newMessageText = action.payload.newMessageText
    //             this._callSubscriber(this._state) //обновление state
    //             break;
    //         }
            
    //     }
    // }