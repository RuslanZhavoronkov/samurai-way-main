import React from "react";
import s from "./Post.module.css";
import { PropsPostType } from "../../../..";



export const Post = (props: PropsPostType) => {
  return (
    <div className={s.item}>
      <img
        src="https://avavatar.ru/images/full/30/pYJBXtXlNkcCZLDa.jpg"
        alt=" venom "
      />
      {props.message}
      <div>
        <span>{props.likesCount} likes</span>
      </div>
    </div>
  );
};
