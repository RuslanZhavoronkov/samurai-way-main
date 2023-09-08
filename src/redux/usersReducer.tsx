export type locationType = {
    city: string
    country: string
}

export type UserType = {
    id: string
    followed: boolean
    fullName: string
    status: string,
    location: locationType
}

export type UserPageType = {
    users: UserType[]
}



type followACType = ReturnType<typeof followAC>
type unfollowACType = ReturnType<typeof unfollowAC>
type setUsersACType = ReturnType<typeof setUsersAC>
export type ActionTypeUser = followACType | unfollowACType | setUsersACType



const initialState: UserPageType = {
    users: [
        // { id: '1', followed: false, fullName: 'Dmitry', status: "I'am a boss", location: { city: 'Minsk', country: 'Belarus' } },
        // { id: '2', followed: true, fullName: 'Sasha', status: "I'am a boss too", location: { city: 'Moscow', country: 'Russia' } },
        // { id: '3', followed: false, fullName: 'Andrew', status: "I'am a boss too", location: { city: 'Kiev', country: 'Ukraine' } }
    ],

}

export const usersReducer = (state: UserPageType = initialState, action: ActionTypeUser): UserPageType => {
    switch (action.type) {
        case "FOLLOW": {
            return { ...state, users: state.users
                .map(el => el.id === action.payload.userId 
                    ? { ...el, followed: true } : el) }
        }

        case "UNFOLLOW": {
            return {...state, users: state.users
                .map(el => el.id === action.payload.userId
                    ? {...el, followed: false} : el)}
        }

        case "SET_USERS": {
            return {...state, users: [...state.users, ...action.payload.users]}
        }

        default: {
            return state
        }
    }
}



//Create ActionCreate
//follow - status:friend
export const followAC = (userId: string) => {
    return {
        type: 'FOLLOW',
        payload: {
            userId
        }
    } as const
}

//unfollow - status: not friend
export const unfollowAC = (userId: string) => {
    return {
        type: 'UNFOLLOW',
        payload: {
            userId
        }
    } as const
}

//Add users from server
const setUsersAC = (users: UserType[]) => {
    return {
        type: 'SET_USERS',
        payload:{
            users
        } 
    } as const
}
