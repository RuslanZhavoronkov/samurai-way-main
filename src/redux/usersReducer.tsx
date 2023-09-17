

type changeCurrentPageACType = ReturnType<typeof changeCurrentPageAC>
type followACType = ReturnType<typeof followAC>
type unfollowACType = ReturnType<typeof unfollowAC>
type setUsersACType = ReturnType<typeof setUsersAC>
export type ActionTypeUser = followACType | unfollowACType | setUsersACType | changeCurrentPageACType


export type PaginationType = {
    pageSize: number
    currentPage: number
}

type photoType = {
    small: null
    large: null
}

export type UserType = {
    name: string
    id: number
    uniqueUrlName: null | string
    photos: photoType
    status: null | string
    followed: boolean
}

export type UsersServerType = {
    items: UserType[]
    totalCount: number
    error: null | string,
}

export type UsersPageType = {
    users: UsersServerType,
    pagination: PaginationType
}
const initialState: UsersPageType = {
    users: {
        items: [],
        totalCount: 5,
        error: null,
    },
    pagination: {
        pageSize: 5, //quantity users in page
        currentPage: 1
    }
}



export const usersReducer = (state: UsersPageType = initialState, action: ActionTypeUser): UsersPageType => {
    switch (action.type) {
        case "FOLLOW": {
            return {
                ...state, users: {
                    ...state.users, items: state.users.items
                        .map(el => el.id === action.payload.userId ? { ...el, followed: true } : el)
                }
            }
        }

        case "UNFOLLOW": {

            return {
                ...state, users: {
                    ...state.users, items: state.users.items
                        .map(el => el.id === action.payload.userId ? { ...el, followed: false } : el)
                }
            }

        }

        case "SET_USERS": {
            return { ...state, users: { ...state.users, items: action.payload.users.items, totalCount: action.payload.users.totalCount } }

            // { ...state, items: [...state.items, ...action.payload.users.items] }
        }


        case "CHANGE_NUMBER_CURRENT_PAGE": {
            return {...state,pagination: {...state.pagination, currentPage: action.payload.numberPage}}
        }

        default: {
            return state
        }
    }
}



//Create ActionCreate
//follow - status:friend
export const followAC = (userId: number) => {
    return {
        type: 'FOLLOW',
        payload: {
            userId
        }
    } as const
}

//unfollow - status: not friend
export const unfollowAC = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        payload: {
            userId
        }
    } as const
}

//Add users from server
export const setUsersAC = (users: UsersServerType) => {
    return {
        type: 'SET_USERS',
        payload: {
            users
        }
    } as const
}


//Change current page

export const changeCurrentPageAC = (numberPage: number) => {
    return {
        type: 'CHANGE_NUMBER_CURRENT_PAGE',
        payload: {
            numberPage
        }
    } as const
}

//___________________________________________________________________________________________

// export type locationType = {
//     city: string
//     country: string
// }

// export type UserType = {
//     id: string
//     photoUrl: string
//     followed: boolean
//     fullName: string
//     status: string,
//     location: locationType
// }

// export type UserPageType = {
//     users: UserType[]
// }


// const initialState: UserPageType = {
//     users: [
//         // { id: '1', photoUrl:'https://i.pinimg.com/236x/78/2c/2b/782c2b0750d32a9206632ebb04a356f1.jpg', followed: false, fullName: 'Dmitry', status: "I'am a boss", location: { city: 'Minsk', country: 'Belarus' } },
//         // { id: '2', photoUrl:'https://oir.mobi/uploads/posts/2020-01/1579277159_34-47.jpg', followed: true, fullName: 'Sasha', status: "I'am a boss too", location: { city: 'Moscow', country: 'Russia' } },
//         // { id: '3', photoUrl:'https://klike.net/uploads/posts/2019-02/medium/1551081365_2.jpg', followed: false, fullName: 'Andrew', status: "I'am a boss too", location: { city: 'Kiev', country: 'Ukraine' } }
//     ],

// }


// export const usersReducer = (state: UserPageType = initialState, action: ActionTypeUser): UserPageType => {
//     switch (action.type) {
//         case "FOLLOW": {
//             return {
//                 ...state, users: state.users
//                     .map(el => el.id === action.payload.userId
//                         ? { ...el, followed: true } : el)
//             }
//         }

//         case "UNFOLLOW": {
//             return {
//                 ...state, users: state.users
//                     .map(el => el.id === action.payload.userId
//                         ? { ...el, followed: false } : el)
//             }
//         }

//         case "SET_USERS": {
//             return { ...state, users: [...state.users, ...action.payload.users] }
//         }

//         default: {
//             return state
//         }
//     }
// }
