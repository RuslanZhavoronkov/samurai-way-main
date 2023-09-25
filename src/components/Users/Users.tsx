import React from 'react'
import { PaginationType, ResponseTypeFollowUnfollow, UsersServerType } from "../../redux/usersReducer"
import s from './users.module.css'
import userPhoto from '../../assets/images/user1.png'
import { NavLink } from 'react-router-dom'
import axios from 'axios'





type UsersPropsType = {
    users: UsersServerType
    pagination: PaginationType
    onPageChanged: (pageNumber: number) => void
    fallow: (userId: number) => void
    unfallow: (userId: number) => void

}


export const Users: React.FC<UsersPropsType> = (props) => {

    const config = {
        withCredentials: true,
        headers: {
            'API-KEY': '559562a7-157b-436b-9ddd-885f8624a836'
        }
    }

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
                        axios.post<ResponseTypeFollowUnfollow>(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {}, config)
                            .then((response) => {
                                if (response.data.resultCode === 0) {//если сервер подтвердил, что подписка произошла
                                    props.fallow(el.id)
                                }
                            })

                    } else {

                        axios.delete<ResponseTypeFollowUnfollow>(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, config)
                        .then((response)=> {
                            if(response.data.resultCode === 0) {
                                props.unfallow(el.id)
                            }
                        })
                            
                    }
                }


                const photoAvatar = el.photos.small !== null ? el.photos.small : userPhoto
                return (
                    <div key={el.id}>
                        <span>{/*picture and button(follow/unfollow) */}
                            <div >
                                <NavLink to={`/profile/${el.id}`}>
                                    <img className={s.userPhoto} src={photoAvatar} />
                                </NavLink> </div>
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