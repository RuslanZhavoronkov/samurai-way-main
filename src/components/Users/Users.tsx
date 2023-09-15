import React, { useEffect } from 'react'
import { UserType } from '../../redux/usersReducer'
import s from './users.module.css'
import { People } from './People'
import axios from 'axios'

type UsersPropsType = {
    users: UserType[]
    fallow: (userId: string) => void
    unfallow: (userId: string) => void
    setUsers: (users: UserType[]) => void
}

export const Users: React.FC<UsersPropsType> = (props) => {
    // const settings = {
    //     withCredentials: true
    // }
    // useEffect(()=> {

    // },[])

    type usersServer = {
        items: userType []
        totalCount: number
        error: null | string
    }


    type userType = {
        name: string
        id: number
        uniqueUrlName: null | string
        photos: photoType
        status: null | string
        followed: boolean
    }

    type photoType = {
        small: string | null | boolean
        large: string | null | boolean
    }



    if (props.users.length === 0) {
        axios.get<usersServer>('https://social-network.samuraijs.com/api/1.0/users')
            .then((response) => props.setUsers(response.data.items))
        props.setUsers(
            [
                {
                    id: '1', photoUrl: 'https://i.pinimg.com/236x/78/2c/2b/782c2b0750d32a9206632ebb04a356f1.jpg',
                    followed: false, fullName: 'Dmitry', status: "I'am a boss", location: { city: 'Minsk', country: 'Belarus' }
                },
                {
                    id: '2', photoUrl: 'https://oir.mobi/uploads/posts/2020-01/1579277159_34-47.jpg',
                    followed: true, fullName: 'Sasha', status: "I'am a boss too", location: { city: 'Moscow', country: 'Russia' }
                },
                {
                    id: '3', photoUrl: 'https://klike.net/uploads/posts/2019-02/medium/1551081365_2.jpg',
                    followed: false, fullName: 'Andrew', status: "I'am a boss too", location: { city: 'Kiev', country: 'Ukraine' }
                }
            ])
    }

    return (

        <div>
            {props.users.map(el => {
                let changeFollow: string;
                !el.followed ? changeFollow = 'Follow' : changeFollow = 'Unfollow'
                const onClickHandler = () => {
                    !el.followed ? props.fallow(el.id) : props.unfallow(el.id)
                }

                return (
                    <div key={el.id}>
                        <span>{/*picture and button(follow/unfollow) */}
                            <div ><img className={s.userPhoto} src={el.photoUrl} /></div>
                            <div><button onClick={onClickHandler}>{changeFollow}</button></div>
                        </span>
                        <span>
                            <span>
                                <div>{el.fullName}</div>
                                <div>{el.status}</div>
                            </span>
                            <span>
                                <div>{el.location.country}</div>
                                <div>{el.location.city}</div>
                            </span>
                        </span>
                    </div>
                )
            })}


        </div>
    )
}


//______________________________________________________________
{/* <People 
                    key = {el.id}
                    id = {el.id} 
                    followed = {el.followed}
                    fullName = {el.fullName}
                    status = {el.status}
                    location = {el.location}
                    fallow = {props.fallow}
                    unfallow = {props.unfallow}/> */}