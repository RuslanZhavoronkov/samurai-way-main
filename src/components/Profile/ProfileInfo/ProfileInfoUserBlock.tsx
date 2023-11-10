import { ProfileServerType } from "../../../redux/profileReducer";
import { ProfileStatusWithHooks } from "./ProfileStatusWithHooks";
import s from "./ProfileInfo.module.css";
import { ContactsSocialNetwork } from "./ContactsSocialNetwork";


type ProfileInfoUserBlockPropsType = {
    isOwner: boolean;
    profileFromServer: ProfileServerType;
    activateEditMode:()=> void
  };
  
  export const ProfileInfoUserBlock: React.FC<ProfileInfoUserBlockPropsType> = ({
    isOwner,
    profileFromServer,
    activateEditMode
  }) => {

    const activateEditModeHandler = () => {
        activateEditMode()
    } 
    return (
      <div className={s.profileInfo}>
        <div>{isOwner && <button onClick={activateEditModeHandler}>edit</button>}</div> {/*if we are on your page then show it button*/}
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
  