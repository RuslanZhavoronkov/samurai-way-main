import React from "react";
import s from "./Post.module.css";

type PropsPostType = {
  message: string;
  likes: number;
};

export const Post = (props: PropsPostType) => {
  return (
    <div className={s.item}>
      <img
        src="https://avavatar.ru/images/full/30/pYJBXtXlNkcCZLDa.jpg"
        alt=" venom "
      />
      {props.message}
      <div>
        <span>{props.likes} likes</span>
      </div>
    </div>
  );
};
