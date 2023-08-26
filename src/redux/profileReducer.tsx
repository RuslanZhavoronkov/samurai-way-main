




export type PostType = {
    id: string,
    message: string
    likesCount: string
}

export type ProfilePageType = {
    posts: PostType[],
    newPostText: string

}



//Action Create

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

export const clearNewPostTextAC = ()=>{
    return {
        type: 'CLEAR-NEWPOSTTEXT'
    } as const
}



export type AddPostACType = ReturnType<typeof addPostAC>
export type UpdatePostACType = ReturnType<typeof updatePostAC>
export type clearNewPostTextACtype = ReturnType<typeof clearNewPostTextAC>
export type ActionTypeProfile = AddPostACType | UpdatePostACType | clearNewPostTextACtype


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

            return { ...state, newPostText: action.payload.newPost }
        }

        case 'ADD-POST': {
            const newPost: PostType = { id: '3', message: state.newPostText, likesCount: '0' }
            // state.posts.push(newPost)
            // state.newPostText = '' //стираем в поле введенное значение
            return { ...state, posts: [...state.posts, newPost] }
        }

        case 'CLEAR-NEWPOSTTEXT': {
            return { ...state, newPostText: '' }
        }

        default: {
            return state
        }
    }
}