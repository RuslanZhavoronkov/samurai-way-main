import React from 'react'
import { connect } from 'react-redux'
import { AppDispatchType, AppRootStateType } from '../../redux/redux-store'
import {
    PaginationType,
    UsersServerType,
    changeCurrentPageAC,
    followAC,
    followUserTC,
    followingInProgressChangeAC,
    followingInProgressType,
    getUsersTC,
    unfollowAC,
    unfollowUserTC
} from '../../redux/usersReducer'
import { Users } from './Users'
import { Preloader } from '../common/Preloader/Preloader'
import { withAuthRedirect } from '../../hocs/withAuthRedirect'




type UsersAPIPropsType = {
    users: UsersServerType
    pagination: PaginationType
    // fallow: (userId: number) => void
    // unfallow: (userId: number) => void
    changeCurrentPage: (numberPage: number) => void
    isFetching: boolean
    followingInProgress: followingInProgressType
    
    getUsers: (pageNumber: number, pageSize: number) => void
    followUser: (userId: number) => void
    unFollowUser:(userId: number)=> void
}





export class UsersAPIComponent extends React.Component<UsersAPIPropsType> {
    constructor(props: UsersAPIPropsType) {
        super(props)
    }

    componentDidMount(): void {
       
        this.props.getUsers(this.props.pagination.currentPage, this.props.pagination.pageSize)

       
    }

    onPageChanged = (pageNumber: number) => {
       
        this.props.changeCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pagination.pageSize)
    }

    render() {
        return (
            <>
                {this.props.isFetching
                    ? <Preloader />
                    : null}
                <Users
                    users={this.props.users}
                    pagination={this.props.pagination}
                    // fallow={this.props.fallow}
                    // unfallow={this.props.unfallow}
                    onPageChanged={this.onPageChanged}
                    followingInProgress={this.props.followingInProgress}
                    followUser = {this.props.followUser}
                    unFollowUser = {this.props.unFollowUser}
                />
            </>


        )
    }
}




// 1. Conteiner Component

const mapStateToProps = (state: AppRootStateType) => {
    return {
        users: state.usersPage.users,
        pagination: state.usersPage.pagination,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
//(action: ActionTypeUser)
const mapDispatchToProps = (dispatch: AppDispatchType) => {
    return {
        // fallow: (userId: number) => {
        //     dispatch(followAC(userId))
        // },
        // unfallow: (userId: number) => {
        //     dispatch(unfollowAC(userId))
        // },
        changeCurrentPage: (numberPage: number) => {
            dispatch(changeCurrentPageAC(numberPage))
        },
        
        getUsers: (pageNumber: number, pageSize: number) => {
            dispatch(getUsersTC(pageNumber, pageSize))
        },
        followUser:(userId: number) => {
            dispatch(followUserTC(userId))
        },
        unFollowUser:(userId: number) => {
            dispatch(unfollowUserTC(userId))
        }
    }
}

export const UsersConnectContainerComponent = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)
export const UsersContainer = withAuthRedirect(UsersConnectContainerComponent)


//_____________________________________________________________________________________________________________
// onPageChanged = (pageNumber: number) => {
       
//     this.props.changeCurrentPage(pageNumber);
// this.props.isFatchingChange(true)
//     userAPI.getUsers(pageNumber, this.props.pagination.pageSize)
//         .then((data) => {
//             this.props.setUsers(data)
//             this.props.isFatchingChange(false)
//         })
// }


        // this.props.isFatchingChange(true)
        // userAPI.getUsers(this.props.pagination.currentPage, this.props.pagination.pageSize)
        //     .then((data) => {
        //         this.props.setUsers(data)
        //         this.props.isFatchingChange(false)
        //     }
        //     )