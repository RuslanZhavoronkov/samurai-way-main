import React from 'react'
import { connect } from 'react-redux'
import { AppRootStateType } from '../../redux/redux-store'
import { ActionTypeUser, PaginationType, UsersServerType, changeCurrentPageAC, followAC, setUsersAC, unfollowAC } from '../../redux/usersReducer'
import axios from 'axios'
import { Users } from './Users'



type UsersAPIPropsType = {
    users: UsersServerType
    pagination: PaginationType
    fallow: (userId: number) => void
    unfallow: (userId: number) => void
    setUsers: (users:UsersServerType) => void
    changeCurrentPage: (numberPage: number) => void
}


// 2. Conteiner Component

export class UsersAPIComponent extends React.Component <UsersAPIPropsType> {
    constructor(props: UsersAPIPropsType) {
        super(props)        
     }

   componentDidMount(): void {
    axios.get<UsersServerType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.pagination.currentPage}&count=${this.props.pagination.pageSize}`)
    .then((response) =>this.props.setUsers(response.data))
   }
   
    onPageChanged =  (pageNumber: number) => {
    this.props.changeCurrentPage(pageNumber);
    axios.get<UsersServerType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pagination.pageSize}`)
    .then((response) =>this.props.setUsers(response.data))
    }

    render  ()  {
    return (
        <Users 
        users={this.props.users}
        pagination = {this.props.pagination}
        fallow = {this.props.fallow}
        unfallow = {this.props.unfallow}   
        onPageChanged = {this.onPageChanged}
        /> 
    )
    }
}




// 1. Conteiner Component

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


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)