import React from 'react'
import { PaginationType, UsersServerType } from '../../redux/usersReducer'
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


//__________________________________________________________________________________________________________________

// type UsersAPIPropsType = {
//     users: UsersServerType
//     pagination: PaginationType
//     fallow: (userId: number) => void
//     unfallow: (userId: number) => void
//     setUsers: (users:UsersServerType) => void
//     changeCurrentPage: (numberPage: number) => void
// }

// export class UsersAPIComponent extends React.Component <UsersAPIPropsType> {
//     constructor(props: UsersAPIPropsType) {
//         super(props)
        
//      }


//    componentDidMount(): void {
//     axios.get<UsersServerType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.pagination.currentPage}&count=${this.props.pagination.pageSize}`)
//     .then((response) =>this.props.setUsers(response.data))
//    }
   
//     onPageChanged =  (pageNumber: number) => {
//     this.props.changeCurrentPage(pageNumber);
//     axios.get<UsersServerType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pagination.pageSize}`)
//     .then((response) =>this.props.setUsers(response.data))
//     }



//     render  ()  {
//     let pageArray = [] 
//     let pagesCount = Math.ceil(this.props.users.totalCount / this.props.pagination.pageSize)

//     for (let i = 1; i <= pagesCount; i++) {
//     pageArray.push(i)
//     }
//         return (
//             <div>
//                 <div>  

//                 {pageArray.map(el => {
//      const boldSpan = this.props.pagination.currentPage === el ? s.selectedPage : ''   

//      const onClickSpanHandler = () => {
//         this.onPageChanged(el)
//      }

//     return (
//         <span className = {boldSpan} onClick = {onClickSpanHandler}>{el}</span>
//     )
// })}



                   
//                     </div>   
//                 {this.props.users.items.map(el => {
//                     let changeFollow: string;
//                     !el.followed ? changeFollow = 'Follow' : changeFollow = 'Unfollow'
//                     const onClickHandler = () => {
//                         !el.followed ? this.props.fallow(el.id) : this.props.unfallow(el.id)
//                     }
//                     const photoAvatar = el.photos.small !== null ? el.photos.small : userPhoto
//                     return (
//                         <div key={el.id}>
//                             <span>{/*picture and button(follow/unfollow) */}
//                                 <div ><img className={s.userPhoto} src={photoAvatar} /></div>
//                                 <div><button onClick={onClickHandler}>{changeFollow}</button></div>
//                             </span>
//                             <span>
//                                 <span>
//                                     <div>{el.name}</div>
//                                     <div>{el.status}</div>
//                                 </span>
//                                 <span>
//                                     <div>{'el.location.country'}</div>
//                                     <div>{'el.location.city'}</div>
//                                 </span>
//                             </span>
//                         </div>
//                     )
//                 })}


//             </div>
//         )
//     }
// }
