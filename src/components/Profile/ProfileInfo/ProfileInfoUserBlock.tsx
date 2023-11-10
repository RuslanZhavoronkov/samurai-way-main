import { ProfileServerType } from "../../../redux/profileReducer";
import { ProfileStatusWithHooks } from "./ProfileStatusWithHooks";
import s from "./ProfileInfo.module.css";
import { ContactsSocialNetwork } from "./ContactsSocialNetwork";


type ProfileInfoUserBlockPropsType = {
    userStatus: string;
    updateProfileStatus: (status: string) => void;
    profileFromServer: ProfileServerType;
  };
  
  export const ProfileInfoUserBlock: React.FC<ProfileInfoUserBlockPropsType> = ({
    userStatus,
    updateProfileStatus,
    profileFromServer,
  }) => {
    return (
      <div className={s.profileInfo}>
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
      </div>
    );
  };
  