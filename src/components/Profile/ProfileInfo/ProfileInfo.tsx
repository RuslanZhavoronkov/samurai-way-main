import React from "react";
import s from "./ProfileInfo.module.css";
import { ProfileServerType } from "../../../redux/profileReducer";
import { Preloader } from "../../common/Preloader/Preloader";
import { ProfileStatus } from "./ProfileStatus";
import { ProfileStatusWithHooks } from "./ProfileStatusWithHooks";

type ProfileInfoPropsType = {
  profileFromServer: ProfileServerType;
  userStatus: string;
  updateProfileStatus: (status: string) => void;
};

export const ProfileInfo: React.FC<ProfileInfoPropsType> = (
    {
        profileFromServer,
        userStatus,
        updateProfileStatus
    }
) => {
  if (!profileFromServer) {
    return <Preloader />;
  }
  return (
    <div>
      <img src={profileFromServer.photos.large} />
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
