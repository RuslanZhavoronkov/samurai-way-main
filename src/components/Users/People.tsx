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

    let changefallowed: string
    if (!props.followed) {
        changefallowed = "Fallow"
    } else {
        changefallowed = "Unfallow"
    }

    const onClickHandler = () => {
        if (!props.followed) {
            props.fallow(props.id)
        } else {
            props.unfallow(props.id)
        }

    }
    return (
        <div>
            <div><button onClick={onClickHandler}>{changefallowed}</button>  {props.fullName} </div>
            <div>{props.status}</div>
        </div>
    )
}