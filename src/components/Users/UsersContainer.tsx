import React from 'react'
import { Users } from './Users'
import { connect } from 'react-redux'
import { AppRootStateType } from '../../redux/redux-store'
import { ActionTypeUser, UsersServerType, changeCurrentPageAC, followAC, setUsersAC, unfollowAC } from '../../redux/usersReducer'




const mapStateToProps = (state: AppRootStateType) => {
    return {
        users: state.usersPage.users,
        pagination: state.usersPage.pagination
    }
}

const mapDispatchToProps = (dispatch:(action:ActionTypeUser)=> void) => {
    return {
        fallow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfallow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: UsersServerType) => {
            dispatch(setUsersAC(users))
        },
        changeCurrentPage: (numberPage: number) => {
            dispatch(changeCurrentPageAC(numberPage))
        }
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)