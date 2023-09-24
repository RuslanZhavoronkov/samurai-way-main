
import { combineReducers, legacy_createStore } from "redux";
import { profileReducer } from "./profileReducer";
import { dialogsReducer } from "./dialogsReducer";
import { sideBarReduser } from "./sideBarReducer";
import { usersReducer } from "./usersReducer";
import { authReducer } from "./authReducer";


const rootReducer = combineReducers({ //создадим главный Reducer(в который будут приходить все actions, а потом будут передав. в дочерние Reducers)
    profilePage:profileReducer,
    dialogsPage:dialogsReducer,
    usersPage: usersReducer,
    sideBar: sideBarReduser,
    auth: authReducer
}) 
   
export type AppRootStateType = ReturnType<typeof rootReducer>

export const store = legacy_createStore(rootReducer)//создание объекта store с помощью Redux

//window.store = store