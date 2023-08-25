const initialState = {
    friends: [
        { id: '1', name: 'Dimych' },
        { id: '2', name: 'Igor' },
        { id: '3', name: 'Victor' }
    ]
}

export type FriendType = {
    id: string
    name: string
}


export type sideBarType = {
    friends: FriendType[]
}

export const sideBarReduser = (state: sideBarType = initialState, action:addFrendsSideBarACType) => {
    switch(action.type){
        case "ADD-FRIENDS":{
            return {...state, friends:[...state.friends, {id:'4', name: action.payload.name}]}
        }
        default:
            return state
    }
}


export const addFrendsSideBarAC = (name: string) => {
    return {
        type: 'ADD-FRIENDS',
        payload: {
            name
        }
    }as const
}

type addFrendsSideBarACType = ReturnType<typeof addFrendsSideBarAC>