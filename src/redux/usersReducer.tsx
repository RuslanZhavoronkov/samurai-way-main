type locationType = {
    city: string
    country: string
}

type UserType = {
    id: string
    followed: boolean
    fullName: string
    status: string,
    location: locationType
}

type UserPageType = {
    users: UserType[]
}



type followACType = ReturnType<typeof followAC>
type unfollowACType = ReturnType<typeof unfollowAC>
type ActionTypeUser = followACType | unfollowACType



const initialState: UserPageType = {
    users: [
        { id: '1', followed: false, fullName: 'Dmitry', status: "I'am a boss", location: { city: 'Minsk', country: 'Belarus' } },
        { id: '2', followed: true, fullName: 'Sasha', status: "I'am a boss too", location: { city: 'Moscow', country: 'Russia' } },
        { id: '3', followed: false, fullName: 'Andrew', status: "I'am a boss too", location: { city: 'Kiev', country: 'Ukraine' } }
    ],

}

export const profileReducer = (state: UserPageType = initialState, action: ActionTypeUser): UserPageType => {
    switch (action.type) {


        default: {
            return state
        }
    }
}



//Create ActionCreate

const followAC = () => {
    return {
        type: 'FOLLOW',
        payload: {

        }
    } as const
}

const unfollowAC = () => {
    return {
        type: 'UNFOLLOW',
        payload: {

        }
    } as const
}