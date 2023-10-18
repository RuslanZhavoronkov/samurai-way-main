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


