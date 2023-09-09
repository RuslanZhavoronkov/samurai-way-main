import React from 'react'
import { Users } from './Users'
import { connect } from 'react-redux'
import { AppRootStateType } from '../../redux/redux-store'
import { ActionTypeUser, UserType, followAC, setUsersAC, unfollowAC } from '../../redux/usersReducer'




const mapStateToProps = (state: AppRootStateType) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch:(action:ActionTypeUser)=> void) => {
    return {
        fallow: (userId: string) => {
            dispatch(followAC(userId))
        },
        unfallow: (userId: string) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)