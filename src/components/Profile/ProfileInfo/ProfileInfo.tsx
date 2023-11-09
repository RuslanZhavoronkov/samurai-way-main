import React, { ChangeEvent, useEffect } from "react";
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
  updateMyAvatarPhoto: (image: File) => void;
};

export const ProfileInfo: React.FC<ProfileInfoPropsType> = ({
  profileFromServer,
  userStatus,
  updateProfileStatus,
  isOwner,
  updateMyAvatarPhoto,
}) => {
  if (!profileFromServer) {
    return <Preloader />;
  }

  const loadingMyAvatar = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length) {
      updateMyAvatarPhoto(event.target.files[0]);
    }
  };

  return (
    <div>
      <img
        src={profileFromServer.photos.large || userPhoto}
        className={s.mainPhoto}
      />
      {isOwner && <input type={"file"} onChange={loadingMyAvatar} />}
     
      <div>
      <div className={s.descriptionBlock}>
        <ProfileStatusWithHooks
          status={userStatus}
          updateProfileStatus={updateProfileStatus}
        />
      </div>
        <div><b>Full name</b>: {profileFromServer.fullName}</div>
        <div><b>Looking for a job</b>: {profileFromServer.lookingForAJob ? 'yes' : 'no'} </div>
        {profileFromServer.lookingForAJob  && 
        <div><b>My professional skills</b>: {profileFromServer.lookingForAJobDescription}</div>}
        <div><b>About me</b>: {profileFromServer.aboutMe ? profileFromServer.aboutMe : ""}</div>
        <div><b>Contacts</b>: {Object.keys(profileFromServer.contacts).map(key => {
          return <ContactsUser key={key} contactTitle={key} contactValue={profileFromServer.contacts[key]}/>
        })}
        </div>
      </div>
    </div>
  );
};


type ContactsPropsType = {
  contactTitle: string | null
  contactValue: string | null
}

const ContactsUser: React.FC<ContactsPropsType> = ({contactTitle, contactValue}) => {
  return (
<div><b>{contactTitle}</b> : {contactValue}</div>
  )
}