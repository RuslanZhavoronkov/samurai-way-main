import React from "react";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { MyPostsConteiner } from "./MyPosts/MyPostsContainer";
import { ProfileServerType } from "../../redux/profileReducer";
import { ProfileDataFormType } from "./ProfileInfo/ProfileDataForm";



type ProfilePropsType = {
  profileFromServer: ProfileServerType
  userStatus: string
  updateProfileStatus:(status: string) => void
  isOwner: boolean
  updateMyAvatarPhoto: (image: File) => void
  saveProfileData: (formData: ProfileDataFormType) => Promise<any>
}
export const Profile: React.FC<ProfilePropsType> = (props) => {
  return (
    <div>
      <ProfileInfo
      updateMyAvatarPhoto = {props.updateMyAvatarPhoto}
      isOwner = {props.isOwner}
      profileFromServer={props.profileFromServer} 
      userStatus={props.userStatus}   
      updateProfileStatus={props.updateProfileStatus}
      saveProfileData={props.saveProfileData}
      
      />
      <MyPostsConteiner />
    </div>
  );
};


//______________________________________________________________________________________________________________________________


