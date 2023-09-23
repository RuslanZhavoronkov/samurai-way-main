import { PhotoType } from "./usersReducer"



export type PostType = {
    id: string,
    message: string
    likesCount: string
}


type ContactsProfileType = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
}


export type ProfileServerType = {
    aboutMe: string
    contacts: ContactsProfileType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotoType
}


export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
    profileFromServer: ProfileServerType

}



export type AddPostACType = ReturnType<typeof addPostAC>
export type UpdatePostACType = ReturnType<typeof updatePostAC>
export type setServerProfileACType = ReturnType<typeof setServerProfileAC>
export type ActionTypeProfile = AddPostACType
| UpdatePostACType //| clearNewPostTextACtype
| setServerProfileACType



const initialState = {
    posts: [
        { id: '1', message: 'Hi, how are you ?', likesCount: '12 ' },
        { id: '2', message: 'It\s my first post', likesCount: ' 11' },
    ],
    newPostText: '',
    profileFromServer: {
        aboutMe: '',
        contacts: {
        facebook: '',
        website: '',
        vk: '',
        twitter: '',
        instagram: '',
        youtube: '',
        github: '',
        mainLink: ''
        },
        lookingForAJob: true,
        lookingForAJobDescription:'',
        fullName: '',
        userId: 1,
        photos: {
        small: '',
        large: ''
        }
        }

}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionTypeProfile): ProfilePageType => {
    switch (action.type) {
        case 'UPDATE-POST': {

            return { ...state, newPostText: action.payload.newPost }
        }

        case 'ADD-POST': {
            const newPost: PostType = { id: '3', message: state.newPostText, likesCount: '0' }
            return { ...state, posts: [...state.posts, newPost], newPostText: '' }
        }

        case 'SET-SERVER-PROFILE': {
            return {...state, profileFromServer: action.payload.serverProfile}
        }

        default: {
            return state
        }
    }
}


//Action Create

export const updatePostAC = (newPost: string) => {
    return {
        type: 'UPDATE-POST',
        payload: {
            newPost,
        }
    } as const
}

export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}


export const setServerProfileAC = (serverProfile: ProfileServerType) => {
return {
    type: 'SET-SERVER-PROFILE',
    payload: {
        serverProfile
    }

} as const
}