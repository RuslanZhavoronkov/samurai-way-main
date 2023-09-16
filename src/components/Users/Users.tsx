import React from 'react'
import { UserPageType, UserType } from '../../redux/usersReducer'
import s from './users.module.css'
import axios from 'axios'
import userPhoto from '../../assets/images/user1.png'

type UsersPropsType = {
    users: UserPageType
    fallow: (userId: number) => void
    unfallow: (userId: number) => void
    setUsers: (users: UserPageType) => void
}

export class Users extends React.Component <UsersPropsType> {
    constructor(props: UsersPropsType) {
        super(props)
        
     }
   componentDidMount(): void {
    axios.get<UserPageType>('https://social-network.samuraijs.com/api/1.0/users')
    .then((response) =>this.props.setUsers(response.data))
   }
    render  ()  {
        return (
            <div>   
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
