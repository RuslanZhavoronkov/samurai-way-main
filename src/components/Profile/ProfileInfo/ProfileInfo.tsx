import React from "react";
import s from "./ProfileInfo.module.css";




export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://img.gazeta.ru/files3/295/12960295/nasa-pic905-895x505-1317.jpg"
                    alt="Nasa"
                />
            </div>
            <div className={s.descriptionBlock}>ava + description</div>

        </div>
    );
};
