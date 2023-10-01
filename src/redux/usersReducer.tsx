//follow/unfollow

import { Dispatch } from "redux"
import { userAPI } from "../api/api"
import { AppActionsType, AppThunkType } from "./redux-store"

export type ResponseTypeFollowUnfollow = {
    resultCode: number
    messages: string[]
    data: {}
    fieldsErrors: string[]
}




type ChangeCurrentPageACType = ReturnType<typeof changeCurrentPageAC>
type FollowACType = ReturnType<typeof followAC>
type UnfollowACType = ReturnType<typeof unfollowAC>
type SetUsersACType = ReturnType<typeof setUsersAC>
type IsFetchingChangeACType = ReturnType<typeof isFetchingChangeAC>
type followingInProgressChangeACType = ReturnType<typeof followingInProgressChangeAC>
export type ActionTypeUser = FollowACType
    | UnfollowACType
    | SetUsersACType
    | ChangeCurrentPageACType
    | IsFetchingChangeACType
    | followingInProgressChangeACType


export type PaginationType = {
    pageSize: number
    currentPage: number
}

export type PhotoType = {
    small: string | undefined
    large: string | undefined
}

export type UserType = {
    name: string
    id: number
    uniqueUrlName: null | string
    photos: PhotoType
    status: null | string
    followed: boolean
}

export type UsersServerType = {
    items: UserType[]
    totalCount: number
    error: null | string,
}

export type followingInProgressType = {
    id: number[]
    disable: boolean
}


export type UsersPageType = {
    users: UsersServerType,
    pagination: PaginationType,
    isFetching: boolean
    followingInProgress: followingInProgressType //disabled button
}


const initialState: UsersPageType = {
    users: {
        items: [],
        totalCount: 5,
        error: null,
    },
    pagination: {
        pageSize: 5, //quantity users in page
        currentPage: 1 //change number page
    },
    isFetching: true,  //крутилка
    followingInProgress: {
        id: [],
        disable: false
    } //disable кнопки во время запроса
}



export const usersReducer = (state: UsersPageType = initialState, action: ActionTypeUser): UsersPageType => {
    switch (action.type) {
        case "FOLLOW": {
            return {
                ...state, users: {
                    ...state.users, items: state.users.items
                        .map(el => el.id === action.payload.userId ? { ...el, followed: true } : el)
                }
            }
        }

        case "UNFOLLOW": {

            return {
                ...state, users: {
                    ...state.users, items: state.users.items
                        .map(el => el.id === action.payload.userId ? { ...el, followed: false } : el)
                }
            }

        }

        case "SET_USERS": {

            return { ...state, users: { ...state.users, items: action.payload.users.items, totalCount: action.payload.users.totalCount } }

            // { ...state, items: [...state.items, ...action.payload.users.items] }
        }


        case "CHANGE_NUMBER_CURRENT_PAGE": {
            return { ...state, pagination: { ...state.pagination, currentPage: action.payload.numberPage } }
        }

        case "IS-FETCHING-CHANGE": {
            return { ...state, isFetching: action.payload.status }
        }
        case "FOLLOWING-PROGRESS-CHANGE": {
            if (action.payload.disable) {
                return { ...state, followingInProgress: { ...state.followingInProgress, id: [...state.followingInProgress.id, action.payload.id] } }
            } else {
                return { ...state, followingInProgress: { ...state.followingInProgress, id: state.followingInProgress.id.filter(el => el !== action.payload.id) } }
            }

        }
        default: {
            return state
        }
    }
}



//Create ActionCreate
//follow - status:friend
export const followAC = (userId: number) => {
    return {
        type: 'FOLLOW',
        payload: {
            userId
        }
    } as const
}

//unfollow - status: not friend
export const unfollowAC = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        payload: {
            userId
        }
    } as const
}

//Add users from server
export const setUsersAC = (users: UsersServerType) => {
    return {
        type: 'SET_USERS',
        payload: {
            users
        }
    } as const
}


//Change current page

export const changeCurrentPageAC = (numberPage: number) => {
    return {
        type: 'CHANGE_NUMBER_CURRENT_PAGE',
        payload: {
            numberPage
        }
    } as const
}

export const isFetchingChangeAC = (status: boolean) => {
    return {
        type: 'IS-FETCHING-CHANGE',
        payload: {
            status
        }
    } as const
}

export const followingInProgressChangeAC = (id: number, disable: boolean) => {
    return {
        type: 'FOLLOWING-PROGRESS-CHANGE',
        payload: {
            id,
            disable
        }
    } as const
}


//thunk
export const getUsersTC = (pageNumber: number, pageSize: number): AppThunkType => (dispatch: Dispatch<AppActionsType>) => {
    dispatch(isFetchingChangeAC(true))
    userAPI.getUsers(pageNumber, pageSize)
        .then((data) => {
            dispatch(setUsersAC(data))
            dispatch(isFetchingChangeAC(false))
        })
}

export const followUserTC = (userId: number) => (dispatch: Dispatch<AppActionsType>) => {
    dispatch(followingInProgressChangeAC(userId, true))
    userAPI.followPost(userId)
        .then((resultCode) => {
            if (resultCode === 0) {//если сервер подтвердил, что подписка произошла
                dispatch(followAC(userId))
            }
            dispatch(followingInProgressChangeAC(userId, false))
        })
}

export const unfollowUserTC = (userId:number) => (dispatch: Dispatch<AppActionsType>) => {
    dispatch(followingInProgressChangeAC(userId, true))
    userAPI.unfollowDelete(userId)
        .then((resultCode) => {
            if (resultCode === 0) {
                dispatch(unfollowAC(userId))
            }
            dispatch(followingInProgressChangeAC(userId, false))
        })
}