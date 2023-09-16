import React from 'react'
import { Users } from './Users'
import { connect } from 'react-redux'
import { AppRootStateType } from '../../redux/redux-store'
import { ActionTypeUser, UserPageType, UserType, followAC, setUsersAC, unfollowAC } from '../../redux/usersReducer'




const mapStateToProps = (state: AppRootStateType) => {
    return {
        users: state.usersPage
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
        setUsers: (users: UserPageType) => {
            dispatch(setUsersAC(users))
        }
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)