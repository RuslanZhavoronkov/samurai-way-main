import React from "react";
import { MyPosts } from "./MyPosts/MyPosts";

import s from "./ProfileInfo.module.css";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";




export const Profile = () => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts />

    </div>
  );
};


//-------------------------------------------------------------------------------------------------------------------

{/* <div>
        <img
          src="https://img.gazeta.ru/files3/295/12960295/nasa-pic905-895x505-1317.jpg"
          alt="Nasa"
        />
      </div>
      <div>ava + description</div> */}