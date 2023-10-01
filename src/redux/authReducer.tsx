import { Dispatch } from "redux"
import { authAPI } from "../api/api"


export type AuthDataResponseServerType = {
    id: number | null
    login: string | null
    email: string | null
}

export type ResponseAuthMeServer = {
    data: AuthDataResponseServerType
    messages: []
    fieldsErrors: string[]
    resultCode: number
}



type AuthInfoForReduxType = {
    data: AuthDataResponseServerType
}


type AuthStateType = {
    AuthInfoForRedux: AuthInfoForReduxType
    isFetching: boolean
    isAuth: boolean
}


const initialState = {
    AuthInfoForRedux: {
        data: {
            id: null,
            login: null,
            email: null

        }
    },
    isFetching: false,
    isAuth: false
}




type SetUserDataACType = ReturnType<typeof setUserDataAC> 
type changeIsFetchingACType = ReturnType<typeof changeIsFetchingAC>
export type AuthActionType = SetUserDataACType | changeIsFetchingACType



export const authReducer = (state: AuthStateType = initialState, action: AuthActionType): AuthStateType => {

    switch (action.type) {
        case 'SET-USER_DATA': {
           
            return {...state, AuthInfoForRedux:{...state.AuthInfoForRedux, data:action.payload.userData}, isAuth: true}
        }

        case 'CHANGE-ISFETCHING': {
            return {...state, isFetching: action.payload.status}
        }

        default: {
            return state;
        }
    }



}

export const setUserDataAC = (userData: AuthDataResponseServerType) => {
    return {
        type: 'SET-USER_DATA',
        payload: {
            userData
        }
    } as const
}


export const changeIsFetchingAC = (status: boolean) => {
    return {
        type: 'CHANGE-ISFETCHING',
        payload: {
            status
        }

    } as const 
}  

export const processAuthorizationTC = () => (dispatch: Dispatch)=> {
    dispatch(changeIsFetchingAC(true))
    authAPI.processAuthorization()
         .then((data) => {
            dispatch(changeIsFetchingAC(false))
             if (data.resultCode === 0) {
                 dispatch(setUserDataAC(data.data))
             }
         })
}

