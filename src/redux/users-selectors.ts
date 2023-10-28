import { AppRootStateType } from "./redux-store"

//users
export const getUserSelector = (state: AppRootStateType) => { 
    return state.usersPage.users
}

//pageSize
export const getPaginationSelector = (state: AppRootStateType) => {
    return state.usersPage.pagination
}

//isFetching(load)
export const getIsFetchingSelector = (state: AppRootStateType) => {
    return state.usersPage.isFetching
}

//
export const getfollowingInProgressSelector = (state: AppRootStateType) => {
    return state.usersPage.followingInProgress
}