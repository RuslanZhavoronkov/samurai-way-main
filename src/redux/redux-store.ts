
import { AnyAction, applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import { ActionTypeProfile, profileReducer } from "./profileReducer";
import { ActionTypeDialogs, dialogsReducer } from "./dialogsReducer";
import { addFrendsSideBarACType, sideBarReduser } from "./sideBarReducer";
import { ActionTypeUser, usersReducer } from "./usersReducer";
import { AuthActionType, authReducer } from "./authReducer";
import thunk, { ThunkAction, ThunkDispatch } from "redux-thunk";
import {FormAction, reducer as formReducer} from "redux-form"
import { AppActionType, appReducer } from "./appReduser";


const rootReducer = combineReducers({ //создадим главный Reducer(в который будут приходить все actions, а потом будут передав. в дочерние Reducers)
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    usersPage: usersReducer,
    sideBar: sideBarReduser,
    auth: authReducer,
    form: formReducer,
    app: appReducer
}) 
   
export type AppRootStateType = ReturnType<typeof rootReducer>

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : Window & typeof globalThis || compose;
// export const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));


//Create middle ware
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))//создание объекта store с помощью Redux

//window.store = store

//Create action type that can be dispatched
export type AppActionsType = ActionTypeDialogs
| ActionTypeUser 
| ActionTypeProfile 
| addFrendsSideBarACType
| AuthActionType
| AppActionType
//| FormAction

//Create main type dispatch
export type AppDispatchType = ThunkDispatch<AppRootStateType, any, AnyAction>

//Create App ThunkType
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionsType>