import React from "react";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { MyPostsConteiner } from "./MyPosts/MyPostsContainer";
import { ProfileServerType } from "../../redux/profileReducer";



type ProfilePropsType = {
  profileFromServer: ProfileServerType
  userStatus: string
  updateProfileStatus:(status: string) => void
}
export const Profile: React.FC<ProfilePropsType> = (props) => {


  return (
    <div>
      <ProfileInfo 
      profileFromServer={props.profileFromServer} 
      userStatus={props.userStatus}   
      updateProfileStatus={props.updateProfileStatus}/>
      <MyPostsConteiner />
    </div>
  );
};


//______________________________________________________________________________________________________________________________

// export type PropsProfileType = {
//   state: ProfilePageType
//   //dispatch: (action: ActionTypeNew) => void
// }


// export const Profile: React.FC<PropsProfileType> = (props) => {
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
