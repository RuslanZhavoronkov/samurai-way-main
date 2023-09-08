import React from 'react'
import { UserPageType, UserType } from '../../redux/usersReducer'
import { People } from './People'

type UsersPropsType = {
    users: UserType[]
    fallow: (userId: string) => void
    unfallow: (userId: string) => void
}

export const Users: React.FC<UsersPropsType> = (props) => {
    return (

        <div>
            {props.users.map(el => {
                return (
                    <>
                    <People 
                    key = {el.id}
                    id = {el.id} 
                    followed = {el.followed}
                    fullName = {el.fullName}
                    status = {el.status}
                    location = {el.location}
                    fallow = {props.fallow}
                    unfallow = {props.unfallow}/>
                    </>
                )
            })}


        </div>
    )
} 