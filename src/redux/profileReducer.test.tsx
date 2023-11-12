import { ProfilePageType, addPostAC, deletePostAC, profileReducer } from "./profileReducer"


 //data
    let stateProfilePage: ProfilePageType = {
        posts: [
            { id: '1', message: 'Hi, how are you ?', likesCount: '12 ' },
            { id: '2', message: 'It\s my first post', likesCount: ' 11' },
        ],
        // newPostText: 'I love REACT',
        profileFromServer: {
            aboutMe: '',
            contacts: {
            facebook: '',
            website: '',
            vk: '',
            twitter: '',
            instagram: '',
            youtube: '',
            github: '',
            mainLink: ''
            },
            lookingForAJob: true,
            lookingForAJobDescription:'',
            fullName: '',
            userId: 1,
            photos: {
            small: '',
            large: ''
            }
            },
            status: '',
            isEditMode: false  
    }
    

test('Add post', () => {
    //change data
    let newStateProfilePage = profileReducer(stateProfilePage, addPostAC('I love REACT'))
    expect(newStateProfilePage.posts[2].message).toBe('I love REACT')
    expect (newStateProfilePage.posts.length).toBe(3)
})

test('Delete', ()=> {
    let newStateProfilePage = profileReducer(stateProfilePage, deletePostAC('1'))
    expect(newStateProfilePage.posts.length).toBe(1)
})

test ('after deleting length should be decrement if id is incorrect', ()=> {
    let newStateProfilePage = profileReducer(stateProfilePage, deletePostAC('1000'))
    expect(newStateProfilePage.posts.length).toBe(2)
})




