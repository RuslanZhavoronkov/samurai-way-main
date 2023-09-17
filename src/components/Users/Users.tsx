import React from 'react'
import { PaginationType, UsersServerType } from '../../redux/usersReducer'
import s from './users.module.css'
import axios from 'axios'
import userPhoto from '../../assets/images/user1.png'
import {  } from 'antd/lib/transfer/interface'

type UsersPropsType = {
    users: UsersServerType
    pagination: PaginationType
    fallow: (userId: number) => void
    unfallow: (userId: number) => void
    setUsers: (users:UsersServerType) => void
    changeCurrentPage: (numberPage: number) => void
}

export class Users extends React.Component <UsersPropsType> {
    constructor(props: UsersPropsType) {
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
    let pageArray = [] 
    let pagesCount = Math.ceil(this.props.users.totalCount / this.props.pagination.pageSize)

    for (let i = 1; i <= pagesCount; i++) {
    pageArray.push(i)
    }
        return (
            <div>
                <div>  

                {pageArray.map(el => {
     const boldSpan = this.props.pagination.currentPage === el ? s.selectedPage : ''   

     const onClickSpanHandler = () => {
        this.onPageChanged(el)
     }

    return (
        <span className = {boldSpan} onClick = {onClickSpanHandler}>{el}</span>
    )
})}



                   
                    </div>   
                {this.props.users.items.map(el => {
                    let changeFollow: string;
                    !el.followed ? changeFollow = 'Follow' : changeFollow = 'Unfollow'
                    const onClickHandler = () => {
                        !el.followed ? this.props.fallow(el.id) : this.props.unfallow(el.id)
                    }
                    const photoAvatar = el.photos.small !== null ? el.photos.small : userPhoto
                    return (
                        <div key={el.id}>
                            <span>{/*picture and button(follow/unfollow) */}
                                <div ><img className={s.userPhoto} src={photoAvatar} /></div>
                                <div><button onClick={onClickHandler}>{changeFollow}</button></div>
                            </span>
                            <span>
                                <span>
                                    <div>{el.name}</div>
                                    <div>{el.status}</div>
                                </span>
                                <span>
                                    <div>{'el.location.country'}</div>
                                    <div>{'el.location.city'}</div>
                                </span>
                            </span>
                        </div>
                    )
                })}


            </div>
        )
    }
}


//__________________________________________________________________________________________________________________

// type UsersPropsType = {
//     users: UserPageType
//     fallow: (userId: number) => void
//     unfallow: (userId: number) => void
//     setUsers: (users: UserPageType) => void
// }

// export const Users: React.FC<UsersPropsType> = (props) => {
   

//     const getUsers = () => {
//         if (props.users.items.length === 0) {
//             axios.get<UserPageType>('https://social-network.samuraijs.com/api/1.0/users')
//                 .then((response) => props.setUsers(response.data))

//         }
//     }




//     return (

//         <div>
//             <button onClick={getUsers}>get Users</button>

//             {props.users.items.map(el => {
//                 let changeFollow: string;
//                 !el.followed ? changeFollow = 'Follow' : changeFollow = 'Unfollow'
//                 const onClickHandler = () => {
//                     !el.followed ? props.fallow(el.id) : props.unfallow(el.id)
//                 }
//                 const photoAvatar = el.photos.small !== null ? el.photos.small : userPhoto
//                 return (
//                     <div key={el.id}>
//                         <span>{/*picture and button(follow/unfollow) */}
//                             <div ><img className={s.userPhoto} src={photoAvatar} /></div>
//                             <div><button onClick={onClickHandler}>{changeFollow}</button></div>
//                         </span>
//                         <span>
//                             <span>
//                                 <div>{el.name}</div>
//                                 <div>{el.status}</div>
//                             </span>
//                             <span>
//                                 <div>{'el.location.country'}</div>
//                                 <div>{'el.location.city'}</div>
//                             </span>
//                         </span>
//                     </div>
//                 )
//             })}


//         </div>
//     )
// }
