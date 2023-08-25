import { addPostAC, profileReducer, updatePostAC } from "./profileReducer"
import { PostType, ProfilePageType } from "./store"

test('update post', () => {

    //data

    let stateProfilePage: ProfilePageType = {
        posts: [
            { id: '1', message: 'Hi, how are you ?', likesCount: '12 ' },
            { id: '2', message: 'It\s my first post', likesCount: ' 11' },
        ],
        newPostText: 'it-kamasutra.com'
    }

    // change data
    let changeStateProfilePage = profileReducer(stateProfilePage, updatePostAC('AKUNA-MATATA'))

    //expect data
    expect(changeStateProfilePage.newPostText).toBe('AKUNA-MATATA')

})


test('Add post', () => {

    //data
    let stateProfilePage: ProfilePageType = {
        posts: [
            { id: '1', message: 'Hi, how are you ?', likesCount: '12 ' },
            { id: '2', message: 'It\s my first post', likesCount: ' 11' },
        ],
        newPostText: 'I love REACT'
    }
    

    //change data

    let changeStateProfilePage = profileReducer(stateProfilePage, addPostAC())

    expect(changeStateProfilePage.posts[2].message).toBe('I love REACT')
})





