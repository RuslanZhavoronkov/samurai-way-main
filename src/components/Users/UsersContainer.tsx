import React from 'react'
import { connect } from 'react-redux'
import { AppRootStateType } from '../../redux/redux-store'
import {
    ActionTypeUser,
    PaginationType,
    UsersServerType,
    changeCurrentPageAC,
    followAC,
    isFetchingChangeAC,
    setUsersAC,
    unfollowAC
} from '../../redux/usersReducer'
import axios, { AxiosRequestConfig } from 'axios'
import { Users } from './Users'
import { Preloader } from '../common/Preloader/Preloader'
import { userAPI } from '../../api/api'



type UsersAPIPropsType = {
    users: UsersServerType
    pagination: PaginationType
    fallow: (userId: number) => void
    unfallow: (userId: number) => void
    setUsers: (users: UsersServerType) => void
    changeCurrentPage: (numberPage: number) => void
    isFatchingChange: (status: boolean) => void
    isFetching: boolean
}



// 2. Conteiner Component
const config: AxiosRequestConfig = {
    withCredentials: true,
    headers: {
        'API-KEY': '559562a7-157b-436b-9ddd-885f8624a836'
    }

}

export class UsersAPIComponent extends React.Component<UsersAPIPropsType> {
    constructor(props: UsersAPIPropsType) {
        super(props)
    }

    componentDidMount(): void {
        this.props.isFatchingChange(true)

        userAPI.getUsers(this.props.pagination.currentPage, this.props.pagination.pageSize)
            .then((data) => {
                this.props.setUsers(data)
                this.props.isFatchingChange(false)
            }
            )
    }

    onPageChanged = (pageNumber: number) => {
        this.props.isFatchingChange(true)
        this.props.changeCurrentPage(pageNumber);

        userAPI.getUsers(pageNumber, this.props.pagination.pageSize)
            .then((data) => {
                this.props.setUsers(data)
                this.props.isFatchingChange(false)
            })
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
                    fallow={this.props.fallow}
                    unfallow={this.props.unfallow}
                    onPageChanged={this.onPageChanged}

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
        isFetching: state.usersPage.isFetching
    }
}

const mapDispatchToProps = (dispatch: (action: ActionTypeUser) => void) => {
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
        },
        isFatchingChange: (status: boolean) => {
            dispatch(isFetchingChangeAC(status))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)


//_________________________________________________________________________________________________________



// const mapDispatchToProps = (dispatch: (action: ActionTypeUser) => void) => {
//     return {
//         fallow: (userId: number) => {
//             dispatch(followAC(userId))
//         },
//         unfallow: (userId: number) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users: UsersServerType) => {
//             dispatch(setUsersAC(users))
//         },
//         changeCurrentPage: (numberPage: number) => {
//             dispatch(changeCurrentPageAC(numberPage))
//         },
//         isFatchingChange: (status: boolean) => {
//             dispatch(isFetchingChangeAC(status))
//         }
//     }
// }


// export const UsersContainer = connect(mapStateToProps, 
//     {
//     fallow:followAC,
//     unfallow:unfollowAC,
//     setUsers:setUsersAC,
//     changeCurrentPage:changeCurrentPageAC,
//     isFatchingChange:isFetchingChangeAC
// }
// )(UsersAPIComponent)


   // {
            //     ...config,
            //     params: {
            //         page: this.props.pagination.currentPage,
            //         count: this.props.pagination.pageSize
            //     }
            // }




            //25.09.23________________________________________________________________________________
            // type UsersAPIPropsType = {
            //     users: UsersServerType
            //     pagination: PaginationType
            //     fallow: (userId: number) => void
            //     unfallow: (userId: number) => void
            //     setUsers: (users: UsersServerType) => void
            //     changeCurrentPage: (numberPage: number) => void
            //     isFatchingChange: (status: boolean) => void
            //     isFetching: boolean
            // }
            
            
            
            // // 2. Conteiner Component
            // const config: AxiosRequestConfig = {
            //     withCredentials: true,
            //     headers: {
            //         'API-KEY': '559562a7-157b-436b-9ddd-885f8624a836'
            //     }
            
            // }
            
            // export class UsersAPIComponent extends React.Component<UsersAPIPropsType> {
            //     constructor(props: UsersAPIPropsType) {
            //         super(props)
            //     }
            
            //     componentDidMount(): void {
            //         this.props.isFatchingChange(true)
            //         axios.get<UsersServerType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.pagination.currentPage}&count${this.props.pagination.pageSize}`,config)
            //             .then((response) => {
            //                 this.props.setUsers(response.data)
            //                 this.props.isFatchingChange(false)
            //             }
            //             )
            //     }
            
            //     onPageChanged = (pageNumber: number) => {
            //         this.props.isFatchingChange(true)
            //         this.props.changeCurrentPage(pageNumber);
            //         axios.get<UsersServerType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pagination.pageSize}`,config)
            //             .then((response) => {
            //                 this.props.setUsers(response.data)
            //                 this.props.isFatchingChange(false)
            //             })
            //     }
            
            //     render() {
            //         return (
            //             <>
            //                 {this.props.isFetching
            //                     ? <Preloader />
            //                     : null}
            //                 <Users
            //                     users={this.props.users}
            //                     pagination={this.props.pagination}
            //                     fallow={this.props.fallow}
            //                     unfallow={this.props.unfallow}
            //                     onPageChanged={this.onPageChanged}
            
            //                 />
            //             </>
            
            
            //         )
            //     }
            // }
            
            
            
            
            // // 1. Conteiner Component
            
            // const mapStateToProps = (state: AppRootStateType) => {
            //     return {
            //         users: state.usersPage.users,
            //         pagination: state.usersPage.pagination,
            //         isFetching: state.usersPage.isFetching
            //     }
            // }
            
            // const mapDispatchToProps = (dispatch: (action: ActionTypeUser) => void) => {
            //     return {
            //         fallow: (userId: number) => {
            //             dispatch(followAC(userId))
            //         },
            //         unfallow: (userId: number) => {
            //             dispatch(unfollowAC(userId))
            //         },
            //         setUsers: (users: UsersServerType) => {
            //             dispatch(setUsersAC(users))
            //         },
            //         changeCurrentPage: (numberPage: number) => {
            //             dispatch(changeCurrentPageAC(numberPage))
            //         },
            //         isFatchingChange: (status: boolean) => {
            //             dispatch(isFetchingChangeAC(status))
            //         }
            //     }
            // }
            
            // export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)
            