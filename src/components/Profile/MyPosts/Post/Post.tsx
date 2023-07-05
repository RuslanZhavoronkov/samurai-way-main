import React from "react";
import s from "./Post.module.css";

export const Post = () => {
  return (
    <div className={s.item}>
      <img
        src="https://avavatar.ru/images/full/30/pYJBXtXlNkcCZLDa.jpg"
        alt=" venom "
      />
      post 1
      <div><span>like</span></div>
    </div>
  );
};
