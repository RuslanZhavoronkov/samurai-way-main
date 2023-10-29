import React from "react";
import s from "./ProfileInfo.module.css";
import { ProfileServerType } from "../../../redux/profileReducer";
import { Preloader } from "../../common/Preloader/Preloader";
import { ProfileStatus } from "./ProfileStatus";
import { ProfileStatusWithHooks } from "./ProfileStatusWithHooks";

type ProfileInfoPropsType = {
    profileFromServer: ProfileServerType
    userStatus: string
    updateProfileStatus: (status: string) => void
}


export const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {
    if (!props.profileFromServer) {
        return <Preloader />
    }
    return (
        <div>
            {/* <div>
                <img
                    src="https://img.gazeta.ru/files3/295/12960295/nasa-pic905-895x505-1317.jpg"
                    alt="Nasa"
                />
            </div> */}
            <img src={props.profileFromServer.photos.large} />
            <div> {props.profileFromServer.fullName} </div>
            <div>{props.profileFromServer.contacts.twitter}</div>
            <div className={s.descriptionBlock}>
                <ProfileStatusWithHooks status={props.userStatus}
                    updateProfileStatus={props.updateProfileStatus} />
                    {/* <ProfileStatus status={props.userStatus}
                    updateProfileStatus={props.updateProfileStatus} /> */}
            </div>

        </div>
    );
};
