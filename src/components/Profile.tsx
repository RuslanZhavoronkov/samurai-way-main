import React from "react";
import s from "./Profile.module.css";

export const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img
          src="https://img.gazeta.ru/files3/295/12960295/nasa-pic905-895x505-1317.jpg"
          alt="Nasa"
        />
      </div>
      <div>ava + description</div>
      <div>
        My posts
        <div>New post</div>
      </div>
      <div className={s.posts}>
        <div className={s.item}>post 1</div>
        <div className={s.item}>post 2</div>
      </div>
    </div>
  );
};
