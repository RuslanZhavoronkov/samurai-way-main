import React from "react";
import { MyPosts} from "./MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { ActionTypeNew, PostType, ProfilePageType } from "../../redux/store";
import { MyPostsConteiner } from "./MyPosts/MyPostsContainer";


// export type PropsProfileType = {
//   state: ProfilePageType
//   //dispatch: (action: ActionTypeNew) => void
// }


// export const Profile: React.FC<PropsProfileType> = (props) => {
  export const Profile = () => { 
  return (
    <div>
      <ProfileInfo />
      <MyPostsConteiner 
      // posts = {props.state.posts} 
      // newPostText={props.state.newPostText} 
      // dispatch = {props.dispatch}
      />
    </div>
  );
};


//______________________________________________________________________________________________________________________________


// export type PropsProfileType = {
//   state: ProfilePageType
//   addPost: () => void
//   changeNewPostText:(newPostText: string) => void
// }


// export const Profile: React.FC<PropsProfileType> = (props) => {
//   return (
//     <div>
//       <ProfileInfo />
//       <MyPosts posts = {props.state.posts} addPost= {props.addPost} newPostText={props.state.newPostText}  changeNewPostText={props.changeNewPostText}/>

//     </div>
//   );
// };
