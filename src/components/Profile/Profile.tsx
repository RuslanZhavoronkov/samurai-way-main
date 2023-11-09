import React from "react";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { MyPostsConteiner } from "./MyPosts/MyPostsContainer";
import { ProfileServerType } from "../../redux/profileReducer";



type ProfilePropsType = {
  profileFromServer: ProfileServerType
  userStatus: string
  updateProfileStatus:(status: string) => void
  isOwner: boolean
}
export const Profile: React.FC<ProfilePropsType> = (props) => {
  return (
    <div>
      <ProfileInfo
      isOwner = {props.isOwner}
      profileFromServer={props.profileFromServer} 
      userStatus={props.userStatus}   
      updateProfileStatus={props.updateProfileStatus}/>
      <MyPostsConteiner />
    </div>
  );
};


//______________________________________________________________________________________________________________________________


