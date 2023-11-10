import React, { ChangeEvent, useState } from "react";
import s from "./ProfileInfo.module.css";
import { ProfileServerType } from "../../../redux/profileReducer";
import { Preloader } from "../../common/Preloader/Preloader";
import { ProfileStatusWithHooks } from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user1.png";
import { ProfileInfoUserBlock } from "./ProfileInfoUserBlock";
import { ProfileDataForm, ProfileDataFormType, ProfileDataReduxForm } from "./ProfileDataForm";

type ProfileInfoPropsType = {
  profileFromServer: ProfileServerType;
  userStatus: string;
  updateProfileStatus: (status: string) => void;
  isOwner: boolean;
  updateMyAvatarPhoto: (image: File) => void;
  saveProfileData: (formData: ProfileDataFormType) => void
};

export const ProfileInfo: React.FC<ProfileInfoPropsType> = ({
  profileFromServer,
  userStatus,
  updateProfileStatus,
  isOwner,
  updateMyAvatarPhoto,
  saveProfileData
}) => {
  const [editMode, setEditMode] = useState<boolean>(false);

  if (!profileFromServer) {
    return <Preloader />;
  }

  const loadingMyAvatar = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length) {
      updateMyAvatarPhoto(event.target.files[0]);
    }
  };

  const activateEditMode = () => {
    setEditMode(true);
  };

const onSubmit = (formData: ProfileDataFormType) => {
  saveProfileData(formData)
  setEditMode(false)
}

  return (
    <div>
      <img
        src={profileFromServer.photos.large || userPhoto}
        className={s.mainPhoto}
      />
      {isOwner && <input type={"file"} onChange={loadingMyAvatar} />}
      <div className={s.descriptionBlock}>
        <ProfileStatusWithHooks
          status={userStatus}
          updateProfileStatus={updateProfileStatus}
        />
      </div>
      {/* If editing mode is on, then show ProfileDataForm */}
      {editMode ? (
        <ProfileDataReduxForm initialValues={ profileFromServer} onSubmit={onSubmit}/>
      ) : (
        <ProfileInfoUserBlock
          profileFromServer={profileFromServer}
          isOwner={isOwner}
          activateEditMode={activateEditMode}
        />
      )}
    </div>
  );
};

//___________________________________________________________________________________

{
  /* <div className={s.profileInfo}>
        <div className={s.descriptionBlock}>
          <ProfileStatusWithHooks
            status={userStatus}
            updateProfileStatus={updateProfileStatus}
          />
        </div>
        <div>
          <b>Full name</b>: {profileFromServer.fullName}
        </div>
        <div>
          <b>Looking for a job</b>:{" "}
          {profileFromServer.lookingForAJob ? "yes" : "no"}{" "}
        </div>
        {profileFromServer.lookingForAJob && (
          <div>
            <b>My professional skills</b>:{" "}
            {profileFromServer.lookingForAJobDescription}
          </div>
        )}
        <div>
          <b>About me</b>:{" "}
          {profileFromServer.aboutMe ? profileFromServer.aboutMe : ""}
        </div>
        <div>
          <b>Contacts</b>:{" "}
          {Object.keys(profileFromServer.contacts).map((key) => {
            return (
              <ContactsSocialNetwork
                key={key}
                contactTitle={key}
                contactValue={profileFromServer.contacts[key]}
              />
            );
          })}
        </div>
      </div> */
}

{
  /* <ProfileInfoUserBlock
        activateEditMode = {activateEditMode}
        isOwner={isOwner}
        profileFromServer={profileFromServer}
      /> */
}
