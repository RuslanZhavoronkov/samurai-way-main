import React from 'react'
import { Users } from './Users'
import { connect } from 'react-redux'
import { AppRootStateType } from '../../redux/redux-store'
import { ActionTypeUser, followAC, unfollowAC } from '../../redux/usersReducer'




const mapStateToProps = (state: AppRootStateType) => {
    return {
        users: state.users.users
    }
}

const mapDispatchToProps = (dispatch:(action:ActionTypeUser)=> void) => {
    return {
        fallow: (userId: string) => {
            dispatch(followAC(userId))
        },
        unfallow: (userId: string) => {
            dispatch(unfollowAC(userId))
        }
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)