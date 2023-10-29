import { createSelector } from "reselect"
import { AppRootStateType } from "./redux-store"
import { UsersServerType } from "./usersReducer"


//primitive selectors
//1.pageSize
export const getPaginationSelector = (state: AppRootStateType) => {
    return state.usersPage.pagination
}
//2.isFetching(load)
export const getIsFetchingSelector = (state: AppRootStateType) => {
    return state.usersPage.isFetching
}
//3.disable button
export const getfollowingInProgressSelector = (state: AppRootStateType) => {
    return state.usersPage.followingInProgress
}

//difficult selectors
//1.users
const getUsersSelector = (state: AppRootStateType) => {
    return state.usersPage.users
}
export const getUsersSuperSelector = createSelector(getUsersSelector,( users: UsersServerType) => { 
    return users
}
)