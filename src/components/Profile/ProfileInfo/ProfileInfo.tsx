import React from "react";
import s from "./ProfileInfo.module.css";
import { ProfileServerType } from "../../../redux/profileReducer";
import { Preloader } from "../../common/Preloader/Preloader";

type ProfileInfoPropsType = {
    profileFromServer: ProfileServerType
}


export const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {
    if (!props.profileFromServer) {
        return <Preloader />
    }
    return (
        <div>
            <div>
                <img
                    src="https://img.gazeta.ru/files3/295/12960295/nasa-pic905-895x505-1317.jpg"
                    alt="Nasa"
                />
            </div>
            <img src = {props.profileFromServer.photos.large}/>
            <div> {props.profileFromServer.fullName} </div>
            <div>{props.profileFromServer.contacts.twitter}</div>
            <div className={s.descriptionBlock}>ava + description</div>

        </div>
    );
};
