


export type PostType = {
    id: string,
    message: string
    likesCount: string
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


export type ProfilePageType = {
    posts: PostType[],
    newPostText: string

}

export type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
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
    addPost: () => void
    changeNewPostText:(newPostText: string) => void
    subscribe:(callBack: (value: StateType)=> void) => void

}



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
            ]

        },

        sideBar: {
            friends: [
                { id: '1', name: 'Dimych' },
                { id: '2', name: 'Igor' },
                { id: '3', name: 'Victor' }
            ]
        }
    },

    getState() {
        return this._state
    },

    _callSubscriber(value: StateType) {
        console.log('state changed');
    },

    addPost() {
        const newPost: PostType = { id: '5', message: this._state.profilePage.newPostText, likesCount: '0' }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state);
    },

    changeNewPostText(newPostText: string) {
        this._state.profilePage.newPostText = newPostText;
        this._callSubscriber(this._state);
    },

    subscribe(callBack: (value: StateType) => void) {
        this._callSubscriber = callBack
    }

}























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