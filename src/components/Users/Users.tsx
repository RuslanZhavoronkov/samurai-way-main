import React from 'react'
import { PaginationType, UsersServerType, followingInProgressType } from "../../redux/usersReducer"
import s from './users.module.css'
import userPhoto from '../../assets/images/user1.png'
import { NavLink } from 'react-router-dom'
import { userAPI } from '../../api/api'


type UsersPropsType = {
    users: UsersServerType
    pagination: PaginationType
    onPageChanged: (pageNumber: number) => void
    followingInProgress: followingInProgressType
    followUser: (userId: number) => void
    unFollowUser:(userId: number)=> void
}

export const Users: React.FC<UsersPropsType> = (props) => {
    let pageArray = []
    let pagesCount = Math.ceil(props.users.totalCount / props.pagination.pageSize)

    for (let i = 1; i <= pagesCount; i++) {
        pageArray.push(i)
    }
    return (
        <div>
            <div>
                {pageArray.map(el => {
                    const boldSpan = props.pagination.currentPage === el ? s.selectedPage : ''

                    const onClickSpanHandler = () => {
                        props.onPageChanged(el)
                    }

                    return (
                        <span className={boldSpan} onClick={onClickSpanHandler}>{el}</span>
                    )
                })}

            </div>
            {props.users.items.map(el => {
                let changeFollow: string;
                let onClickHandler;
                !el.followed ? changeFollow = 'Follow' : changeFollow = 'Unfollow'

                onClickHandler = () => {
                    if (!el.followed) {
                     props.followUser(el.id)
                    } else {
                     props.unFollowUser(el.id)
                    }
                }
                const disabledButton = props.followingInProgress.id.some(id => id === el.id)

                const photoAvatar = el.photos.small !== null ? el.photos.small : userPhoto
                return (
                    <div key={el.id}>
                        <span>{/*picture and button(follow/unfollow) */}
                            <div >
                                <NavLink to={`/profile/${el.id}`}>
                                    <img className={s.userPhoto} src={photoAvatar} />
                                </NavLink> </div>
                            <div><button onClick={onClickHandler} disabled={disabledButton}>{changeFollow}</button></div>
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

//_________________________________________________________________________________________
// const config = {
    //     withCredentials: true,
    //     headers: {
    //         'API-KEY': '559562a7-157b-436b-9ddd-885f8624a836'
    //     }
    // }
    
    //______________________________________________________________________________
    // onClickHandler = () => {
    //     props.followingInProgressChange(el.id, true)
    //     if (!el.followed) {
    //         userAPI.followPost(el.id)
    //             .then((resultCode) => {
    //                 if (resultCode === 0) {//если сервер подтвердил, что подписка произошла
    //                     props.fallow(el.id)
    //                 }
    //                 props.followingInProgressChange(el.id, false)
    //             })

    //     } else {
    //         userAPI.unfollowDelete(el.id)
    //             .then((resultCode) => {
    //                 if (resultCode === 0) {
    //                     props.unfallow(el.id)
    //                 }
    //                 props.followingInProgressChange(el.id, false)
    //             })

    //     }
    // }