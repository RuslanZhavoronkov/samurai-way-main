import React from 'react'
import { PaginationType, UsersServerType } from "../../redux/usersReducer"
import s from './users.module.css'
import userPhoto from '../../assets/images/user1.png'





type UsersPropsType = {
    users: UsersServerType
    pagination: PaginationType
    onPageChanged: (pageNumber: number) => void
    fallow: (userId: number) => void
    unfallow: (userId: number) => void

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
                !el.followed ? changeFollow = 'Follow' : changeFollow = 'Unfollow'
                const onClickHandler = () => {
                    !el.followed ? props.fallow(el.id) : props.unfallow(el.id)
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