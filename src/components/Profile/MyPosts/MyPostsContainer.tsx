
import { ActionTypeProfile, addPostAC, updatePostAC } from "../../../redux/profileReducer";
import { MyPosts } from "./MyPosts";
import { AppRootStateType} from "../../../redux/redux-store";
import { connect } from "react-redux";



const mapStateToProps = (state: AppRootStateType) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}


const mapDispatchToProps = (dispatch:(action:ActionTypeProfile)=>void) => {
  return {
    changeNewPostText: (valueText: string) => {
      dispatch(updatePostAC(valueText))
    },
    addPost:() => {
           dispatch(addPostAC())
         }
  }
}

export const MyPostsConteiner = connect(mapStateToProps,mapDispatchToProps)(MyPosts)//Создадим контейнерную компоненту для MyPost

//_____________________________________________________________________________________________________________________




// not use store_____________________________________________________________________
// type PropsMyPostsType = {
//   posts: PostType[]
//   newPostText: string
//   dispatch: (action: ActionTypeNew) => void
// }

// export const MyPostsConteiner: React.FC<PropsMyPostsType> = (props) => {


//   const addPost = () => {
//     store.dispatch(addPostAC())
//       //props.dispatch(addPostAC())
//   }

// const changeNewPostText = (valueText:string) => {
//   store.dispatch(updatePostAC(valueText))
// //props.dispatch(updatePostAC(valueText))
// }


//   return (
//     <MyPosts changeNewPostText = {changeNewPostText} addPost = {addPost}  posts = {props.posts} newPostText = {props.newPostText}/>
//   );
// };

//______________________________________________________________________________________________________________________________________________________

// export const MyPostsConteiner = () => {

//   let state = store.getState()

//   const addPost = () => {
//     store.dispatch(addPostAC())
//   }

// const changeNewPostText = (valueText:string) => {
//   store.dispatch(updatePostAC(valueText))
// }


//   return (
//     <MyPosts
//     changeNewPostText = {changeNewPostText}
//     addPost = {addPost}  posts = {state.profilePage.posts}
//     newPostText = {state.profilePage.newPostText} />
//   );
// };
