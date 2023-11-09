import React, { ChangeEvent } from "react";
import s from "./ProfileInfo.module.css";
import { ProfileServerType } from "../../../redux/profileReducer";
import { Preloader } from "../../common/Preloader/Preloader";
import { ProfileStatusWithHooks } from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user1.png";

type ProfileInfoPropsType = {
  profileFromServer: ProfileServerType;
  userStatus: string;
  updateProfileStatus: (status: string) => void;
  isOwner: boolean;
};

export const ProfileInfo: React.FC<ProfileInfoPropsType> = ({
  profileFromServer,
  userStatus,
  updateProfileStatus,
  isOwner,
}) => {

  if (!profileFromServer) {
    return <Preloader />;
  }

  const loadingMyAvatar = (event: ChangeEvent<HTMLInputElement>) => {

  }

  return (
    <div>
      <img
        src={profileFromServer.photos.large || userPhoto}
        className={s.mainPhoto}
      />
      {isOwner && <input type={"file"}  onChange = {loadingMyAvatar}/>}
      <div> {profileFromServer.fullName} </div>
      <div>{profileFromServer.contacts.twitter}</div>
      <div className={s.descriptionBlock}>
        <ProfileStatusWithHooks
          status={userStatus}
          updateProfileStatus={updateProfileStatus}
        />
      </div>
    </div>
  );
};


