
import { ActionTypeProfile, addPostAC} from "../../../redux/profileReducer";
import { MyPosts } from "./MyPosts";
import { AppRootStateType } from "../../../redux/redux-store";
import { connect } from "react-redux";



const mapStateToProps = (state: AppRootStateType) => {
  return {
    posts: state.profilePage.posts,
    // newPostText: state.profilePage.newPostText
  }
}


const mapDispatchToProps = (dispatch: (action: ActionTypeProfile) => void) => {
  return {
    // changeNewPostText: (valueText: string) => {
    //   dispatch(updatePostAC(valueText))
    // },
    addPost: (newPostText: string) => {
      dispatch(addPostAC(newPostText))
    }
  }
}

export const MyPostsConteiner = connect(mapStateToProps, mapDispatchToProps)(MyPosts)//Создадим контейнерную компоненту для MyPost

//_____________________________________________________________________________________________________________________





