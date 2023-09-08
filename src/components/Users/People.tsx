import { useState } from "react"
import { locationType } from "../../redux/usersReducer"

type PeoplePropsType = {
    id: string
    followed: boolean
    fullName: string
    status: string,
    location: locationType
    fallow: (userId: string) => void
    unfallow: (userId: string) => void
}

export const People: React.FC<PeoplePropsType> = (props) => {

    
    const onClickHandler = () => {
        if (!props.followed){
           props.fallow(props.id)  
        } else {
            props.unfallow(props.id)
        }
       
    }
    return (
        <div>
            <button onClick = {onClickHandler}>{props.followed}</button>  {props.fullName} {props.status}
        </div>
    )
}