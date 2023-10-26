

import { processAuthorizationTC } from "./authReducer"
import { AppDispatchType, AppThunkType } from "./redux-store"

const appInitialState = {
    isInitialized: false
}


//reducer
export const appReducer = (state:AppInitialStateType = appInitialState, action:AppActionType):AppInitialStateType  => {
    switch(action.type) {
        case 'APP/INITIALIZED-SUCCESS': {
            return {...state, isInitialized: true}
        }
        default: {
            return state;
          }
    }
}

//actionCreator
export const initializedSuccessAC = () => {
    return {
        type: 'APP/INITIALIZED-SUCCESS',
    } as const
}

//thunk
export const initializeAppTC = (): AppThunkType => (dispatch:AppDispatchType) => {
    dispatch(processAuthorizationTC())
    .then(() => {
        dispatch(initializedSuccessAC())
    })
    
}


//type
export type AppInitialStateType = {
    isInitialized: boolean
}
export  type initializedSuccessACType = ReturnType<typeof initializedSuccessAC>
export type AppActionType = initializedSuccessACType