




export type PostType = {
    id: string,
    message: string
    likesCount: string
}

export type ProfilePageType = {
    posts: PostType[],
    newPostText: string

}

export const updatePostAC = (newPost: string) => {
    return {
        type: 'UPDATE-POST',
        payload: {
            newPost,
        }
    } as const
}



export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}



export type AddPostACType = ReturnType<typeof addPostAC>
export type UpdatePostACType = ReturnType<typeof updatePostAC>
export type ActionTypeProfile = AddPostACType | UpdatePostACType


const initialState = {
    posts: [
        { id: '1', message: 'Hi, how are you ?', likesCount: '12 ' },
        { id: '2', message: 'It\s my first post', likesCount: ' 11' },
    ],
    newPostText: ''

}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionTypeProfile): ProfilePageType => {
    switch (action.type) {
        case 'UPDATE-POST': {
            state.newPostText = action.payload.newPost //action.newPostText;
            return state
        }

        case 'ADD-POST': {
            const newPost: PostType = { id: '5', message: state.newPostText, likesCount: '0' }
            state.posts.push(newPost)
            state.newPostText = '' //стираем в поле введенное значение
            return state
        }

        default: {
            return state
        }
    }
}