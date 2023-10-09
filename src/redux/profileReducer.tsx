import { Dispatch } from "redux"
import { PhotoType } from "./usersReducer"
import { AppActionsType } from "./redux-store"
import { profileAPI } from "../api/api"



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
        lookingForAJobDescription: '',
        fullName: '',
        userId: 1,
        photos: {
            small: '',
            large: ''
        }
    },
    status: ''
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
            return { ...state, profileFromServer: action.payload.serverProfile }
        }

        case "GET-PROFILE-STATUS": {
            return { ...state, status: action.payload.status }
        }

        case "GET-UPDATE-PROFILE-STATUS": {
            debugger
            return { ...state, status: action.payload.status }
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

export const getProfileStatusAC = (status: string) => {
    return {
        type: 'GET-PROFILE-STATUS',
        payload: {
            status
        }
    } as const
}

export const updateProfileStatusAC = (status: string) => {
    return {
        type: 'GET-UPDATE-PROFILE-STATUS',
        payload: {
            status
        }
    } as const
}


//thunk
export const getUserProfileTC = (userId: string) => (dispatch: Dispatch<AppActionsType>) => {
    profileAPI.getUserProfile(userId)
        .then((data) => {
            dispatch(setServerProfileAC(data))
        })
}

export const getProfileStatusTC = (userId: string) => async (dispatch: Dispatch) => {
    try {
        const response = await profileAPI.getStatus(userId)
        dispatch(getProfileStatusAC(response))
    }
    catch (e) {
        alert('WARNING ERROR')
    }
}

export const updateProfileStatusTC = (status: string) => async (dispatch: Dispatch) => {
    try {
        const response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(updateProfileStatusAC(status))
        }
    }
    catch (e) {
        alert('WARNING ERROR')
    }
}


//type
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
    status: string
}



export type AddPostACType = ReturnType<typeof addPostAC>
export type UpdatePostACType = ReturnType<typeof updatePostAC>
export type SetServerProfileACType = ReturnType<typeof setServerProfileAC>
export type GetProfileStatusACType = ReturnType<typeof getProfileStatusAC>
export type UpdateProfileStatusACType = ReturnType<typeof updateProfileStatusAC>
export type ActionTypeProfile = AddPostACType
    | UpdatePostACType //| clearNewPostTextACtype
    | SetServerProfileACType
    | GetProfileStatusACType
    | UpdateProfileStatusACType

